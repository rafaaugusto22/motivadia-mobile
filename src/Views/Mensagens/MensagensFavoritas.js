import React,{useEffect, useState}from 'react';
import { FlatList, SafeAreaView,Text } from "react-native";
import ItemMensagem from '../../Components/ItemMensagem/ItemMensagem';
import estilo from "./estilo";
import AsyncStorage from '@react-native-community/async-storage'
import Loading from '../../Components/Loading/Loading'



const MensagensFavoritas = ({navigation}) => {
    const [mensagens,setMensagens] = useState([])
    const [loading, setLoading] = useState(true);
    navigation.setOptions({
        headerTitle: () => <Text style={estilo.textoHeader}>Favoritos</Text>,
        headerBackTitleVisible:false
    })
    

    useEffect(() => {
      carregarMensagens().finally(() =>{
        setLoading(false)
      })
    }, []) 

    const carregarMensagens = async ()  => {
      try {
        
        const keys = await AsyncStorage.getAllKeys();
         
        const keysFiltered = keys.filter((key) =>{
          return key.startsWith("mensagem_key")
          }
        )
       
        const result = await AsyncStorage.multiGet(keysFiltered);
        setMensagens(result.map(req => JSON.parse(req[1])));
      } catch (error) {
        console.error(error)
      }
    }

    if(loading){
      return (
        <Loading/>
      )
    }else{
      return (
        <SafeAreaView style={estilo.container}>
          <FlatList
            data={mensagens}
            renderItem={({ item }) => <ItemMensagem navigation={navigation} dataItem={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
      )
  }
 
  

  
};

export default MensagensFavoritas;

