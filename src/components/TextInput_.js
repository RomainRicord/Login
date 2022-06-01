import { View,TextInput,Text,Pressable } from "react-native";
import {useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const TextInput_ = ({state}) => {

    const {text_,placeholder_,set,get,hide,setinerror,iserror,password} = state

    const [error,seterror] = useState("")
    const [hider,sethider] = useState(hide)    

    return(
        <View style={{width:300,margin:10}}>

            <Text style={{fontSize:20,marginLeft:10,marginBottom:10}}>{text_}</Text>

            <View>
            <TextInput onEndEditing={(e) => {

                console.log("Call onEndEditing",e.nativeEvent.text)

                if (text_ == "Email"){
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    if (!re.test(e.nativeEvent.text)){
                        seterror("Adresse email non valide !")
                        let errors = iserror

                        errors.Email = true
                        setinerror(errors)
                    }else{
                        seterror("")
                        let errors = iserror

                        errors.Email = false
                        setinerror(errors)
                    }

                }

                if (text_ == "Mot de passe"){

                    if (typeof(e.nativeEvent.text) == "undefined" && e.nativeEvent.text == "" && e.nativeEvent.text.length <= 0) {
                        seterror("Mot de passe non valide !")
                        let errors = iserror

                        errors.Password = true
                        setinerror(errors)
                    }else{
                        seterror("")
                        let errors = iserror

                        errors.Password = false
                        setinerror(errors)
                    }

                }

                if (text_ == "Confirmation du mot de passe"){

                    console.log("Check confirmed password",typeof(e.nativeEvent.text) )

                    if (typeof(e.nativeEvent.text) === "undefined" || (e.nativeEvent.text == "" || e.nativeEvent.text.length <= 0 || e.nativeEvent.text != password)) {
                        seterror("Le mot de passe ne correspond pas !")
                        console.log("Mot de passe ne correspond pas",typeof(e.nativeEvent.text),e.nativeEvent.text,password)
                        
                        let errors = iserror

                        errors.ConfirmedPassword = true
                        setinerror(errors)
                    }else{
                        seterror("")
                        let errors = iserror

                        errors.ConfirmedPassword = false
                        setinerror(errors)
                    }

                }

                if (text_ == "Prénom"){

                    console.log("Check First Name",typeof(e.nativeEvent.text) )

                    if (typeof(e.nativeEvent.text) === "undefined" || (e.nativeEvent.text == "" || e.nativeEvent.text.length <= 0)) {
                        seterror("Le champ prénom ne peut pas être vide !")
                        let errors = iserror

                        errors.FirstName = true
                        setinerror(errors)
                    }else{
                        seterror("")
                        let errors = iserror

                        errors.FirstName = false
                        setinerror(errors)
                    }

                }

                if (text_ == "Nom"){

                    console.log("Check Last Name",typeof(e.nativeEvent.text) )

                    if (typeof(e.nativeEvent.text) === "undefined" || (e.nativeEvent.text == "" || e.nativeEvent.text.length <= 0)) {
                        seterror("Le champ Nom ne peut pas être vide !")
                        let errors = iserror

                        errors.LastName = true
                        setinerror(errors)
                    }else{
                        seterror("")
                        let errors = iserror

                        errors.LastName = false
                        setinerror(errors)
                    }

                }

                console.log(iserror)

            }} style={{borderWidth:1,borderColor:"gray",borderRadius:20,padding:10}} 
            placeholderTextColor="gray" 
            placeholder={placeholder_} 
            onChangeText={set} 
            value={get} 
            blurOnSubmit={true} 
            secureTextEntry={hider}></TextInput>
            {hide &&
                <Pressable style={{position:'absolute',right:10,top:4}} onPress={() => {
                    sethider(!hider)
                }}>
                    <Icon style={{}} name={hider ? "eye-slash" : "eye"} size={30} />  
                </Pressable>          
            }
            </View>
            {error != "" &&
                <Text style={{marginLeft:10,fontSize:10,color:'red'}}>{error}</Text>
            }
        </View>
    )

}

export default TextInput_