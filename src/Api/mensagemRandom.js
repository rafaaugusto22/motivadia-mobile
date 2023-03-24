import MensagensFetchService from '../Services/MensagensFetchService';
import AsyncStorage from '@react-native-community/async-storage'

const MensagemRandom = async () => {
  const total =  await MensagensFetchService.lerMensagemDiaTotal().then(
    res =>{
      return res.data[0].total;
    }
  )
  let today = new Date(Date.now());
  today.setHours(0,0,0,0)
  const mensagemDiaRandom = JSON.parse(await AsyncStorage.getItem('mensagem_dia_random'))
  if(mensagemDiaRandom==null 
    || new Date(today).getTime() != new Date(mensagemDiaRandom.date).getTime()
    ){
    let idMessage = Math.floor(Math.random() * total) + 1 ;
    console.log(idMessage)
    const items = {'id':idMessage, 'date':today}
    await AsyncStorage.setItem('mensagem_dia_random',JSON.stringify(items)) 
  }
  
}

export {MensagemRandom};
 