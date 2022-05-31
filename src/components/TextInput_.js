import { TextInput,Text } from "react-native";

const TextInput_ = ({state}) => {

    const {text_,placeholder_,set,get,hide} = state

    return(
        <View>

            <Text>{text_}</Text>

            <TextInput placeholder={placeholder_} onChangeText={set} value={get} blurOnSubmit={true} secureTextEntry={hide}></TextInput>

        </View>
    )

}

export default TextInput_