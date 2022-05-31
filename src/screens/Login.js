import {View,Image} from 'react-native'

const Login = ({state}) => {

    const {setnavigation} = state

    return(
        <View>
            <Image style={{width:200,height:200}} source={require('../../assets/img/CONNEC1.png')} />
        </View>
    )
}

export default Login