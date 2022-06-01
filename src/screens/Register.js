import {View} from 'react-native'
import TextInput_ from '../components/TextInput_'
import Button from '../components/Button'
import {useState,useEffect} from 'react'

const Register = ({state}) => {

    const [iserror,setinerror] = useState({
        Email:false,
        Password:false,
        ConfirmedPassword:false
    })

    const {
        setemail,
        email,
        password,
        setpassword,
        confirmedpassword,
        setconfirmedpassword,
        setnavigation,
        setback,
        back
    } = state

    useEffect(() => {
        setback("Welcome")    
    }, []);

    return(
        <View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <TextInput_ state={{text_:"Email",placeholder_:"Entrez votre email",hide:false,set:setemail,get:email,setinerror,iserror}}/>
                <TextInput_ state={{text_:"Mot de passe",placeholder_:"Entrez votre mot de passe",hide:true,set:setpassword,get:password,setinerror,iserror}}/>
                <TextInput_ state={{text_:"Confirmation du mot de passe",password:password,placeholder_:"Entrez votre mot de passe",hide:true,set:setconfirmedpassword,get:confirmedpassword,setinerror,iserror}}/>
                <Button state={{setnavigation,setback,back_:"Register",radius:true,back,iserror,destination:"RegisterNext",text:"Suivant",backgroundcolor:"#3457D5",textcolor:'white'}}/> 
            </View>
        </View>
    )
}

export default Register