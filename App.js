import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Valid from './src/screens/Valid'
import Header from './src/screens/Header';

const App = () => {

  const [navigation,setnavigation] = useState("Login")
  const {back,setback} = useState("")

  return (
    <View style={{flex:1}}>
      {navigation != "Welcome" && navigation != "Valid" &&
        <Header state={{navigation,text:navigation,setback,back}}/>
      }
    <View style={styles.container}>

      {navigation == "Welcome" &&

        <Welcome state={{setnavigation,setback}} />
      
      }
      {navigation == "Login" &&

        <Login state={{setnavigation,setback}} />

      }
      {navigation == "Register" &&

        <Register state={{setnavigation,setback}} />

      }
      {navigation == "Valid" &&

        <Valid state={{setnavigation,setback}} />

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