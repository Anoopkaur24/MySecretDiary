import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

export default function ViewEntriesScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const storedEntries = JSON.parse(await AsyncStorage.getItem('diaryEntries')) || [];
      setEntries(storedEntries);
    };

    loadEntries();
  }, []);

  const deleteEntry = async (id) => {
    const filteredEntries = entries.filter(entry => entry.id !== id);
    await AsyncStorage.setItem('diaryEntries', JSON.stringify(filteredEntries));
    setEntries(filteredEntries);
    Alert.alert('Entry deleted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Entries</Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.entryText}>{item.text}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteEntry(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
