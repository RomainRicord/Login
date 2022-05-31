import {View,Pressable,Text} from 'react-native'
import Icon from 'react-native-vector-icons/fontawesome'

const Header = ({state}) => {

    const {text,back,setnavigation} = state

    return(
    <View style={{display:'flex',height:50,backgroundColor:'gray',display:'flex',justifyContent:'center',flexDirection:'row'}}>
        
        <View style={{flex:2,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
        <Pressable onPress={() => {
            setnavigation(back)
        }} style={{width:32,height:32,marginLeft:20}}>

            <Icon name="arrow-left" size={30} />

        </Pressable>
        
        <Text style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',color:'black'}}>{text}</Text>
        </View>
        <View style={{flex:2}}>
        
        </View>

    </View>)
}

export default Header