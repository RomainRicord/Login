import {View,Pressable,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = ({state}) => {

    const {text,back,setnavigation} = state

    return(
    <View style={{display:'flex',height:80,backgroundColor:'gray',display:'flex',justifyContent:'center',flexDirection:'row'}}>
        
        <View style={{flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:20}}>
        <Pressable onPress={() => {
            setnavigation(back)
        }} style={{width:32,height:32,marginLeft:20}}>

            <Icon name="arrow-left" size={30} />

        </Pressable>
        
        
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
        
        <Text style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'right',color:'black'}}>{text}</Text>

        </View>

        <View style={{flex:1}}>

        </View>

    </View>)
}

export default Header