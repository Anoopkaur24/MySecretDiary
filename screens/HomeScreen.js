import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MySecretDiary</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DiaryEntry')}>
        <Text style={styles.buttonText}>Add New Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewEntries')}>
        <Text style={styles.buttonText}>View Entries</Text>
      </TouchableOpacity>
    </View>
  );
}
