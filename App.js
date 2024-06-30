import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DiaryEntryScreen from './screens/DiaryEntryScreen';
import ViewEntriesScreen from './screens/ViewEntriesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DiaryEntry" component={DiaryEntryScreen} />
        <Stack.Screen name="ViewEntries" component={ViewEntriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
