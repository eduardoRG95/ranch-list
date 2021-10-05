import React from 'react'
import { TouchableOpacity, Text, View, TextInput, Button, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const goToList = () => {
     Alert.alert("testeteeee")
   }
   const [value, onChangeText] = React.useState('E-mail')
   return (
      <View>
      <TextInput
         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => onChangeText(text)}
         value={value}
      />
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToList}>
         <Text>Cadastrar</Text>
      </TouchableOpacity>
      </View>
   )
}
export default About