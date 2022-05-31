import { View,TextInput,Text } from "react-native";

const TextInput_ = ({state}) => {

    const {text_,placeholder_,set,get,hide} = state

    return(
        <View style={{width:400,margin:10}}>

            <Text style={{fontSize:20,marginLeft:10,marginBottom:10}}>{text_}</Text>

            <TextInput style={{borderWidth:1,borderColor:"gray",borderRadius:20,padding:10}} placeholderTextColor="gray" placeholder={placeholder_} onChangeText={set} value={get} blurOnSubmit={true} secureTextEntry={hide}></TextInput>

        </View>
    )

}

export default TextInput_