import {View,Text} from 'react-native'
import Button from '../components/Button'
import SuccessLogo from '../components/SuccessLogo'

const Success = ({state}) => {

    const {setnavigation,navigation,setback,back} = state

    return(
        <View style={{display:'flex',flex:1,justifyContent:'space-around',alignItems:'center'}}>

            <View style={{alignItems:'center'}}>
                <SuccessLogo/>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:25}}>
                    <Text style={{fontSize:25}}>Votre compte a été</Text>
                    <Text style={{fontSize:25}}>crée avec succès</Text>
                </View>
            </View>

            <View style={{}}>            
                <Button state={{setnavigation,setback,back_:"Register",radius:true,back,destination:"RegisterNext",text:"Se connecter",backgroundcolor:"#3457D5",textcolor:'white'}}/> 
            </View>

        </View>
    )
}

export default Success