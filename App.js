import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import RegisterNext from './src/screens/RegisterNext';
import Valid from './src/screens/Valid'
import Header from './src/screens/Header';

const App = () => {

  const [navigation,setnavigation] = useState("Register")
  const [back,setback] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [confirmedpassword,setconfirmedpassword] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [birthday,setbirthday] = useState("")
  const [civility,setcivility] = useState("")

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

        <Login state={{navigation,setnavigation,setback,back,email,setemail,password,setpassword}} />

      }
      {navigation == "Register" &&

        <Register state={{navigation,setnavigation,setback,back,email,setemail,password,setpassword,confirmedpassword,setconfirmedpassword}} />

      }
      {navigation == "RegisterNext" &&

        <RegisterNext state={{navigation,setnavigation,setback,back,email,setemail,password,setpassword,confirmedpassword,setconfirmedpassword,firstname,setfirstname,lastname,setlastname,birthday,setbirthday,civility,setcivility}} />

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