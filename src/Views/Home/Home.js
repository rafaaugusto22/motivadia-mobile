import React, { Fragment,useEffect } from 'react';
import { Image, View } from "react-native";
import estilo from "./estilo";
import AsyncStorage from '@react-native-community/async-storage'

const Home = ({ navigation }) => {

   const openApp = async()=> {
      const chk = await AsyncStorage.getItem('mensagem_dia')
      if(chk==null)
      await AsyncStorage.setItem('mensagem_dia',"true")
      navigation.replace("MensagensTab")
  }
  useEffect(() => {
    setTimeout(function(){
        openApp();
      }, 5000);
  
  }, []) 
  return (
    <Fragment>
      <View style={estilo.container}>
      <Image
          source={require("../../../resources/img/logo-home.png")}
          style={estilo.imagem}
      />
      </View>
    </Fragment>
  )
};
export default Home;

