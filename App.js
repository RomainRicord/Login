import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Valid from './src/screens/Valid'
import Header from './src/screens/Header';

const App = () => {

  const [navigation,setnavigation] = useState("Welcome")
  const [back,setback] = useState("")

  return (
    <View style={{flex:1}}>
      {navigation != "Welcome" && navigation != "Valid" &&
        <Header state={{setnavigation,text:navigation,setback,back}}/>
      }
    <View style={styles.container}>

      {navigation == "Welcome" &&

        <Welcome state={{navigation,setnavigation,setback,back}} />
      
      }
      {navigation == "Login" &&

        <Login state={{navigation,setnavigation,setback,back}} />

      }
      {navigation == "Register" &&

        <Register state={{navigation,setnavigation,setback,back}} />

      }
      {navigation == "Valid" &&

        <Valid state={{navigation,setnavigation,setback,back}} />

      }
    </View>
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