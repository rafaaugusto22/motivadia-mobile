import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView,RefreshControl,AppState } from "react-native";
import { AdMobBanner } from 'react-native-admob';
import ItemMensagem from '../../Components/ItemMensagem/ItemMensagem';
import Loading from '../../Components/Loading/Loading';
import MensagensFetchService from '../../Services/MensagensFetchService';
import NotificationService from '../../Services/NotificationService';
import estilo from "./estilo";
import {MensagemRandom} from '../../Api/mensagemRandom'



var PushNotification = require("react-native-push-notification");


const Mensagens = ({navigation}) => {

  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    carregaMensagem().then(() => setRefreshing(false));
  }, [refreshing]);

  const handleAppStateChange = (state) => {
    console.log(state);
    if(state=="active"){
      carregaMensagem()
    }
  }

  const carregaMensagem = async() =>{
    await MensagemRandom();
    await MensagensFetchService.lerMensagemDia(setLoading).then(
      res =>{ 
        setMensagens(res);
      }
    )
  }

    
    useEffect(() => {
      carregaMensagem();
      NotificationService.agendaMensagem();
      AppState.addEventListener('change', handleAppStateChange);
      return (() => {
        AppState.removeEventListener('change', handleAppStateChange);
      })
    }, []) 

  if(loading){
    return (
      <Loading/>
    )
  }else{
  return (
    <SafeAreaView style={estilo.container}>
      
      <FlatList
        data={mensagens.data}
        renderItem={({ item }) => <ItemMensagem navigation={navigation} dataItem={item} />}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
        <AdMobBanner
          style={estilo.banner}
          adSize="smartBannerPortrait"
          adUnitID="ca-app-pub-8506372631739245/1208577337"
        />
    </SafeAreaView>
  )
}

  
};

export default Mensagens;

