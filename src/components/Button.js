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
        radius,
        iserror
    } = state

    return(
    <Pressable onPress={() => {
        if (typeof(iserror) != "undefined") {

            let check = false

            console.log("iserror:",iserror)

            for (let [k, v] of Object.entries(iserror)){

                console.log("Check error button",k,v)

                if (v){
                    check = true
                    break
                }
            }
            if (!check){
                setnavigation(destination) 
            }
        } else{
            setnavigation(destination)
        }
        //setback(back_)
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
        borderRadius:typeof(radius) == "undefined" ? 0 : 40
        }}>
        <Text style={{color:textcolor,textAlign:'center',fontSize:32,fontWeight:typeof(fontweight) == "undefined" ? 'normal' : fontweight}}>{text}</Text>
    </Pressable>)
}

export default Button