import React, { useState,useEffect} from 'react';
import { Image, View, Text } from "react-native";
import estilo from "./estilo";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {msgLike,curtirMensagem} from '../../Api/curtidas'
import AsyncStorage from '@react-native-community/async-storage';
import ShareService from '../../Services/ShareService'


const ItemMensagem = ({navigation,dataItem}) => {
  const [curtiu, setCurtiu] = useState(false);

  const clicouCurtir = async () => {
    const novoEstCurtiu = await curtirMensagem(curtiu,dataItem)
    setCurtiu(novoEstCurtiu)
}

const getMensagemArmazenada = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('mensagem_key'+dataItem.id)
    return jsonValue != null ? setCurtiu(true) : setCurtiu(false)
  } catch(error) {
    console.error(error);
  }
}
useEffect(() => {
  getMensagemArmazenada();
  const unsubscribe = navigation.addListener('focus', () => {
    getMensagemArmazenada();
  });
  () => unsubscribe()
}, [navigation]) 



  return (
    <View style={estilo.item}>
      <Text style={estilo.mensagem}>"{dataItem.mensagem}"</Text>
      <Text style={estilo.autor}>{dataItem.autor}</Text>
      <View style={estilo.containerBotoes}>
      <Icon.Button  name={msgLike(curtiu)} iconStyle={curtiu?estilo.botoesSelected:estilo.botoes}  backgroundColor="#FFFFFF" color={curtiu?"#FF5613":"#707070"} size={24} onPress={clicouCurtir}/>
      <Icon.Button  name="share"  iconStyle={estilo.botoes}  backgroundColor="#FFFFFF" color="#707070" size={24}  onPress={()=>{ShareService.onShare(dataItem)}}/>
      </View>
    </View>
  )
};
export default ItemMensagem;

