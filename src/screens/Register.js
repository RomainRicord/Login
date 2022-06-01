import {View} from 'react-native'
import TextInput_ from '../components/TextInput_'
import Button from '../components/Button'
import {useState,useEffect} from 'react'

const Register = ({state}) => {

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
                <TextInput_ state={{text_:"Email",placeholder_:"Entrez votre email",hide:false,set:setemail,get:email}}/>
                <TextInput_ state={{text_:"Mot de passe",placeholder_:"Entrez votre mot de passe",hide:true,set:setpassword,get:password}}/>
                <TextInput_ state={{text_:"Confirmation du mot de passe",placeholder_:"Entrez votre mot de passe",hide:true,set:setconfirmedpassword,get:confirmedpassword}}/>
                <Button state={{setnavigation,setback,back_:"Register",radius:true,back,destination:"RegisterNext",text:"Suivant",backgroundcolor:"#3457D5",textcolor:'white'}}/> 
            </View>
        </View>
    )
}

export default Register