import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;
    

const estilo = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#77BEF5"
      
    },imagem:{
        flex: 1,
        width: largura*0.8,
        resizeMode: 'contain' 
    }
})
export default estilo;