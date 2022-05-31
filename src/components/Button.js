import {Pressable,Text} from 'react-native'

const Button = ({state}) => {

    const {
        setnavigation,
        text,
        destination,
        backgroundcolor,
        textcolor,
        fontweight,
        setback,
        back,
        back_,
        radius
    } = state

    return(
    <Pressable onPress={() => {
        setnavigation(destination) 
        setback(back_)
    } } 
    style={{
        backgroundColor:backgroundcolor,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        borderWidth:backgroundcolor == "white" ? 2 : 0,
        margin:20,
        width:300,
        borderRadius:typeof(radius) == "undefined" ? 0 : 20
        }}>
        <Text style={{color:textcolor,textAlign:'center',fontSize:32,fontWeight:typeof(fontweight) == "undefined" ? 'normal' : fontweight}}>{text}</Text>
    </Pressable>)
}

export default Button