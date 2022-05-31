
import {View,Text} from 'react-native'
import {Picker} from '@react-native-picker/picker';

const PickerCivility = ({state}) => {

    const {civility,setcivility} = state

    return(
        <View style={{width:300,margin:10}}>
            
                <Text style={{fontSize:20,marginLeft:10,marginBottom:10}}>Civilité</Text>
                <View style={{borderWidth:1,borderColor:"gray",borderRadius:20,padding:10}}>
                    <Picker
                    selectedValue={civility}
                    onValueChange={(itemValue, itemIndex) =>
                        setcivility(itemValue)
                    }
                    >
                        <Picker.Item label="Homme" value="homme" />
                        <Picker.Item label="Femme" value="femme" />
                        <Picker.Item label="Je ne souhaite pas répondre" value="noanswer" />
                    </Picker>
                </View>
        </View>
    )

}

export default PickerCivility