import {View} from 'react-native'
import TextInput_ from '../components/TextInput_'
import Button from '../components/Button'
import {useState} from 'react'


const RegisterNext = ({state}) => {

    const {
        setemail,
        email,
        password,
        setpassword,
        confirmedpassword,
        setconfirmedpassword,
        setnavigation,
        setback,
        back,
        firstname,
        setfirstname,
        lastname,
        setlastname,
        birthday,
        setbirthday,
        civility,
        setcivility
    } = state
    
    return(
        <View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <TextInput_ state={{text_:"Email",placeholder_:"Entrez votre email",hide:false,set:setemail,get:email}}/>
                <TextInput_ state={{text_:"Prénom",placeholder_:"Entrez votre prénom",hide:false,set:setfirstname,get:firstname}}/>
                <TextInput_ state={{text_:"Nom",placeholder_:"Entrez votre nom",hide:false,set:setlastname,get:lastname}}/>
                <TextInput_ state={{text_:"Confirmation du mot de passe",placeholder_:"Entrez votre mot de passe",hide:true,set:setconfirmedpassword,get:confirmedpassword}}/>
                <Button state={{setnavigation,setback,back_:"Login",radius:true,back,destination:"Valid",text:"Suivant",backgroundcolor:"blue",textcolor:'white'}}/> 
            </View>
        </View>
    )
}

export default RegisterNext