import {View,Pressable,Text} from 'react-native'
import Icon from 'react-native-vector-icons/fontawesome'

const Header = ({state}) => {

    const {text,back,setnavigation} = state

    return(
    <View style={{backgroundColor:'gray'}}>
        
        <Pressable onPress={() => {
            setnavigation(back)
        }}

        >


        </Pressable>

        <Text style={{textAlign:'center',color:'black'}}></Text>

    </View>)
}

export default Header