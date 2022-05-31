
import {View,Text,TextInput} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react'

const PickerDate = ({state}) => {

    const {birthday,setbirthday} = state

    const [date,showdate] = useState(false)

    return(
        <View style={{width:300,margin:10}}>

                <Text style={{fontSize:20,marginLeft:10,marginBottom:10}}>Date de naissance</Text>

                <TextInput onFocus={(e) => {

                    showdate(true)

                }} 
                value={String(birthday)}
                style={{borderWidth:1,borderColor:"gray",borderRadius:20,padding:10}} 
                placeholderTextColor="gray" 
                placeholder={"Entrez votre date de naissance"} 
                blurOnSubmit={true} ></TextInput>
                {date &&
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={birthday}
                    mode="date"
                    is24Hour={true}
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate
                        showdate(false)
                        setbirthday(currentDate)
                    }}
                    />
                }
        </View>)

}

export default PickerDate