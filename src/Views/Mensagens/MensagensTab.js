import React, { useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
    Text
  } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LogoTitle from "../../Components/Cabecalho/LogoTitle/LogoTitle"
import HeaderButtons from '../../Components/Cabecalho/HeaderButtons/HeaderButtons';
import Mensagens from './Mensagens'
import MensagensTodas from './MensagensTodas'
import estilo from './estilo'



const Tab = createMaterialTopTabNavigator();

const MensagensTab = ({navigation}) => {

    navigation.setOptions({
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: "left",
        headerRight: () => <HeaderButtons navigation={navigation} />
        
    })
return (
      <Tab.Navigator
        initialRouteName="Mensagens"
        tabBarOptions={{
          activeTintColor: '#77BEF5',
          labelStyle: { fontSize: 16 },
          upperCaseLabel:false,
          indicatorStyle: {
            backgroundColor: '#77BEF5',
          },
          style: {
            marginTop:16,
          }
        }}
      >
        <Tab.Screen
          name="Mensagens"
          component={Mensagens}
          options={{ tabBarLabel: props => <Text style={estilo.texto} {...props}>Mensagem do Dia</Text> }}
        />
        <Tab.Screen
          name="MensagensTodas"
          component={MensagensTodas}
          options={{ tabBarLabel: props => <Text style={estilo.texto} {...props}>Todas as Mensagens</Text>  }}
        />
      </Tab.Navigator>
    );
  }

  export default MensagensTab;