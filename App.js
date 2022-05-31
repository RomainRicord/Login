import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Valid from './src/screens/Valid'

const App = () => {

  const [navigation,setnavigation] = useState("Login")

  return (
    <View style={styles.container}>
      {navigation == "Welcome" &&

        <Welcome state={{setnavigation}} />
      
      }
      {navigation == "Login" &&

        <Login state={{setnavigation}} />

      }
      {navigation == "Register" &&

        <Register state={{setnavigation}} />

      }
      {navigation == "Valid" &&

        <Valid state={{setnavigation}} />

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App