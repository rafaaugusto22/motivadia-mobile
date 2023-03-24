import React from 'react';
import { View,StatusBar} from "react-native";
import estilo from "./estilo";
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

const HeaderButtons = ({navigation}) => {
  return (
    <View style= {estilo.header}>
        <StatusBar
          backgroundColor="#77BEF5"
        />
        <Icon.Button  name="favorite" iconStyle={estilo.botoes} backgroundColor="#FFFFFF" color="#707070" size={24} onPress={() => navigation.navigate('Favoritos')}/>
        <Icon.Button name="settings" iconStyle={estilo.botoes}  backgroundColor="#FFFFFF" color="#707070" size={24}  onPress={() => navigation.navigate('Configuracoes')}/>
     </View>
  )
};
export default HeaderButtons;

