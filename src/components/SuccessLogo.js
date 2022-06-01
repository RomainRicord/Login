import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const SuccessLogo = () => {
    return(
        <View style={{display:'flex',alignItems:'center',height:200,width:200,justifyContent:'center',borderRadius:100,borderWidth:2,borderColor:'lightgreen'}}>

            <Icon style={{color:'lightgreen'}} name="check" size={100} />

        </View>
    )
}

export default SuccessLogo