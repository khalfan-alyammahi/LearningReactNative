import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';




export default function App() {
  // const [firstName , setFirstName] = useState('');
  // const [isNew , setIsNew] = useState(false);
  return <LoginScreen/>
   
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
