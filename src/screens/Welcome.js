import {View} from 'react-native'
import Logo from '../components/Logo'

const Welcome = ({state}) => {

    //console.log(state.setnavigation)

    return(
        <View style={{flex:1,margin:40}}>
            <Logo/>
        </View>
    )
}

export default Welcome