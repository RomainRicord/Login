import {View} from 'react-native'
import Button from '../components/Button'
import Logo from '../components/Logo'

const Welcome = ({state}) => {

    //console.log(state.setnavigation)

    const {setnavigation,setback,back} = state

    return(
        <View style={{flex:1,margin:40,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
            <Logo/>
            <View>
                <Button state={{setnavigation,setback,back_:"Welcome",back,destination:"Login",text:"Se connecter",backgroundcolor:"blue",textcolor:'white',fontweight:'bold'}}/>
                <Button state={{setnavigation,setback,back_:"Welcome",back,destination:"Register",text:"S'inscrire",backgroundcolor:"white",textcolor:'gray'}}/>
            </View>
        </View>
    )
}

export default Welcome