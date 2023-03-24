import React, {Fragment,useEffect,useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Alert,
  ActivityIndicator
} from "react-native";
import estilo from "./estilo";
import LogoTitle from "../../Components/Cabecalho/LogoTitle/LogoTitle"
import HeaderButtons from '../../Components/Cabecalho/HeaderButtons/HeaderButtons';
import ItemMensagem from '../../Components/ItemMensagem/ItemMensagem';
import MensagensFetchService from '../../Services/MensagensFetchService'
import Loading from '../../Components/Loading/Loading'


const MensagensTodas = ({navigation}) => {

  navigation.setOptions({
      headerTitle: props => <LogoTitle {...props} />,
      headerTitleAlign: "left",
      headerRight: () => <HeaderButtons/>
      
  })

  
  const [mensagens, setMensagens] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingFooter, setLoadingFooter] = useState(false);
  const [stopLoad, setStopLoad] = useState(false);


    
    useEffect(() => {
      carregarMensagens()
    }, []) 

    const carregarMensagens = async ()  => {
      if(!stopLoad){
        setLoadingFooter(true);
        
        MensagensFetchService.lerMensagens(page).then((data)=> {
          setMensagens([...mensagens,...data])
          setPage(paginacao(page))
          if(data.length==0)
            setStopLoad(true)
        }).finally(()=>{
          setLoading(false);
          setLoadingFooter(false)
        } 
        );
        
      }
  }

  const paginacao = (pagina) =>{
    return pagina + 1;
  }

  const renderFooter = () => {
    if (!loadingFooter) return null;
    return (
      <View style={estilo.loading}>
        <ActivityIndicator size="large" color="#77BEF5"/>
      </View>
    );
  };

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
          onEndReachedThreshold={0.1}
          onEndReached={()=>carregarMensagens()}
          ListFooterComponent={renderFooter}
          
        />
      </SafeAreaView>
    )
  }

  
};

export default MensagensTodas;

