import React, { Fragment,useState, useEffect } from 'react';
import { Text, View,TouchableOpacity, Alert } from "react-native";
import estilo from "./estilo";
import Icon from 'react-native-vector-icons/MaterialIcons'
import CheckBox from 'react-native-check-box';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../Components/Loading/Loading'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import NotificationService from '../../Services/NotificationService';
var PushNotification = require("react-native-push-notification");
Icon.loadFont();

const Configuracao = ({ navigation }) => {

 navigation.setOptions({
    headerTitle: () => <Text style={estilo.textoHeader}>Configurações</Text>,
    headerBackTitleVisible:false
})
const [loading, setLoading] = useState(true);
const [checked, setChecked] = useState(true);

useEffect(() => {
  carregar().finally(()=>{
    setLoading(false);
  })
}, []) 

const carregar = async () =>{
  const chk = await AsyncStorage.getItem('mensagem_dia')
  chk==="true"?setChecked(true):setChecked(false)
}

const receberMensagemDia = async ()=>{
  setChecked(!checked)
  if(!checked){
    await AsyncStorage.setItem('mensagem_dia',"true")
    NotificationService.agendaMensagem()
  }else{
    PushNotification.cancelAllLocalNotifications()
    await AsyncStorage.setItem('mensagem_dia',"false")
  }
  
}


if(loading){
  return (
    <Loading/>
  )
}else{
  return (
    <View style={{marginTop:14}}>
      <TouchableOpacity style={estilo.container} onPress={()=>  receberMensagemDia()}>
        <View>
          <Icon name="message" color="#FF5613" size={24}></Icon>
        </View>
        <View style={estilo.contentTexto} >
        <Text style={estilo.texto}>Receber mensagem do dia</Text>
        </View>
        
        <View>
          <CheckBox style={{padding: 2}} checkBoxColor="#77BEF5" onClick={()=>{
               receberMensagemDia()
             }}
          isChecked={checked}/>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={estilo.container} onPress={()=> navigation.push("Politica")}>
        <View>
          <Icon name="lock" color="#FF5613" size={24}></Icon>
        </View>
        <View style={estilo.contentTexto} >
        <Text style={estilo.texto}>Politica de privacidade</Text>
        </View>
    </TouchableOpacity>
  </View>
  

)
}
  
};
export default Configuracao;

