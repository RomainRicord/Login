import {Pressable,Text} from 'react-native'

const Button = ({setnavigation,text,destination,backgroundcolor,textcolor}) => {
    <Pressable onPress={() => {
        setnavigation(destination)
    }} style={{backgroundColor:backgroundcolor}}>
        <Text style={{color:textcolor}}>{text}</Text>
    </Pressable>
}

export default Button