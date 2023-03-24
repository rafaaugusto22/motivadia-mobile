/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  Platform
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Views/Home/Home'
import MensagensTab from './src/Views/Mensagens/MensagensTab'
import MensagensFavoritas from './src/Views/Mensagens/MensagensFavoritas';
import Configuracao from './src/Views/Config/Configuracao';
import Politica from './src/Views/Politica/Politica';




const Stack = createStackNavigator();

function App() {
  const alturaCabecalho = () =>{
    return Platform.OS == "ios"? 110:58;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        { headerStyle: { backgroundColor: '#FFFFFF',height: alturaCabecalho() },
          headerTintColor: '#707070',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         }
          }>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="MensagensTab" component={MensagensTab}  />
        <Stack.Screen name="Favoritos" component={MensagensFavoritas}  />
        <Stack.Screen name="Configuracoes" component={Configuracao}  />
        <Stack.Screen name="Politica" component={Politica}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default App;
