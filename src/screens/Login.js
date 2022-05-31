import {View,Image,Text,Pressable} from 'react-native'
import Button from '../components/Button'
import TextInput_ from '../components/TextInput_'
import {useEffect} from 'react'

const Login = ({state}) => {

    const {
        setnavigation,
        setpassword,
        password,
        setemail,
        email,
        setback,
        back
    } = state

    useEffect(() => {
        setback("Welcome")    
    }, []);

    return(
        <View style={{flex:4,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:200,height:200}} source={require('../../assets/img/CONNEC1.png')} />
            <TextInput_ state={{text_:"Email",placeholder_:"Entrez votre email",hide:false,set:setemail,get:email}}/>
            <TextInput_ state={{text_:"Mot de passe",placeholder_:"Entrez votre mot de passe",hide:true,set:setpassword,get:password}}/>
        
            <Button state={{setnavigation,setback,back_:"Login",radius:true,back,destination:"Valid",text:"SE CONNECTER",backgroundcolor:"blue",textcolor:'white'}}/> 

            <View style={{display:'flex',justifyContent:'center',flexDirection:'row'}}>
                <Text>Pas encore inscrit ?</Text>
                <Pressable onPress={() => {
                    setnavigation("Register")
                    setback("Login")
            }}><Text style={{color:'blue',marginLeft:5}}>Créer un compte</Text></Pressable>
            </View>
        </View>
    )
}

export default Login