import AsyncStorage from '@react-native-community/async-storage';

const msgLike = (curtiu) => {
    if (curtiu) {
        return 'favorite'
    } else {
        return 'favorite-border'
    }
}

const curtirMensagem = async (curtiu,item) => {
    if(!curtiu){
        if(item.id!=undefined){
        const jsonValue = JSON.stringify(item)
        await AsyncStorage.setItem('mensagem_key'+item.id,jsonValue)
        }
    }else{
        await AsyncStorage.removeItem('mensagem_key'+item.id)
    }
    return !curtiu;
}


export {msgLike,curtirMensagem}