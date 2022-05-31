import { View,TextInput,Text,Pressable } from "react-native";
import {useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/fontawesome'

const TextInput_ = ({state}) => {

    const {text_,placeholder_,set,get,hide} = state

    const [error,seterror] = useState("")
    const [hider,sethider] = useState(hide)
    

    return(
        <View style={{width:400,margin:10}}>

            <Text style={{fontSize:20,marginLeft:10,marginBottom:10}}>{text_}</Text>

            <View>
            <TextInput onBlur={(e) => {

                if (text_ == "Email"){
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    if (!re.test(e.target.value)){
                        seterror("Addresse email non valide !")
                    }else{
                        seterror("")
                    }
                }
            }} style={{borderWidth:1,borderColor:"gray",borderRadius:20,padding:10}} placeholderTextColor="gray" placeholder={placeholder_} onChangeText={set} value={get} blurOnSubmit={true} secureTextEntry={hider}></TextInput>
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