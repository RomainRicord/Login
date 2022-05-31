import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,BackHandler } from 'react-native';
import {useState,useEffect} from 'react'
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import RegisterNext from './src/screens/RegisterNext';
import Valid from './src/screens/Valid'
import Header from './src/screens/Header';
import { SafeAreaView } from 'react-native';

const App = () => {

  const [navigation,setnavigation] = useState("Welcome")
  const [back,setback] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [confirmedpassword,setconfirmedpassword] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [birthday,setbirthday] = useState(new Date("01/12/2021"))
  const [civility,setcivility] = useState("")

  useEffect(() => {
    const backAction = () => {
      
      setnavigation(back)
      console.log(back)

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
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
    </SafeAreaView>
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