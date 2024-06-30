import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

export default function DiaryEntryScreen() {
  const [entry, setEntry] = useState('');

  const saveEntry = async () => {
    try {
      const existingEntries = JSON.parse(await AsyncStorage.getItem('diaryEntries')) || [];
      const newEntry = { id: Date.now(), text: entry };
      await AsyncStorage.setItem('diaryEntries', JSON.stringify([...existingEntries, newEntry]));
      Alert.alert('Entry saved!');
      setEntry('');
    } catch (e) {
      Alert.alert('Failed to save entry.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>New Diary Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your diary entry here..."
        multiline
        value={entry}
        onChangeText={setEntry}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save Entry" onPress={saveEntry} color="#4a90e2" />
      </View>
    </ScrollView>
  );
}
