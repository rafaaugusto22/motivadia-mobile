import {
    Platform,
  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
const enderecoMotivaDiaApi = Platform.OS === 'ios' ?
'https://raapps.com.br/motivadia-api' : 'https://raapps.com.br/motivadia-api'

export default class MensagensFetchService {

static lerMensagemDia = async (calbackLoading) => {
    try {
    const mensagemDiaRandom = JSON.parse(await AsyncStorage.getItem('mensagem_dia_random'))  
    const http = await fetch(`${enderecoMotivaDiaApi}/mensagem/${mensagemDiaRandom.id}`);
    if (http.status >= 400) {
        throw new Error("Bad response from server")
    }
    
    const json = await http.json();
    return json;
    }catch(error) {
        console.error(error);
    }finally{
        if(calbackLoading!=undefined)
        calbackLoading(false)
    }
}


static lerMensagemDiaTotal = async () => {
    try {
    const http = await fetch(`${enderecoMotivaDiaApi}/mensagem/total`);
    if (http.status >= 400) {
        throw new Error("Bad response from server")
    }
    
    const json = await http.json();
    return json;
    }catch(error) {
        console.error(error);
    }
}

static lerMensagens = async (page) => {
    try {
        const http = await fetch(`${enderecoMotivaDiaApi}/mensagens/${page}`)
        if (http.status >= 400) {
            throw new Error("Bad response from server")
        }
        const json = await http.json();
        return json.data;
      } catch (error) {
        console.error(error);
    }
}


}