import {View,Text} from 'react-native'
import TextInput_ from '../components/TextInput_'
import Button from '../components/Button'
import {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import PickerCivility from '../components/PickerCivility';
import PickerDate from '../components/PickerDate';
import {useEffect} from 'react'

const RegisterNext = ({state}) => {

    const {
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

    useEffect(() => {
        setback("Register")  
        console.log("Set Back Register Next")  
    }, []);
    
    return(
        <View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <PickerCivility state={{civility,setcivility}} />
                <TextInput_ state={{text_:"Prénom",placeholder_:"Entrez votre prénom",hide:false,set:setfirstname,get:firstname}}/>
                <TextInput_ state={{text_:"Nom",placeholder_:"Entrez votre nom",hide:false,set:setlastname,get:lastname}}/>
                <PickerDate state={{birthday,setbirthday}} />
                <Button state={{setnavigation,setback,back_:"Login",radius:true,back,destination:"Valid",text:"TERMINÉ",backgroundcolor:"blue",textcolor:'white'}}/> 
            </View>
        </View>
    )
}

export default RegisterNext