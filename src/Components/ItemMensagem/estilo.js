import {StyleSheet, Dimensions} from "react-native"
import {logoSize} from "../../Api/image"

const largura = Dimensions.get("screen").width;
    
var dims = logoSize(39,50);

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
      },
      item: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginVertical: 5
      },
      mensagem:{
        fontFamily:'Raleway-Bold',
        fontSize:16,
        color:'#707070',
        marginBottom:13
      },
      autor:{
        fontFamily:'Raleway-Bold',
        fontSize:12,
        color:'#707070',
        opacity:0.4
      },
      containerBotoes:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:13,
        marginLeft:-10
      },
      botoes:{
        opacity:0.4
      },
      botoesSelected:{
        opacity:1
      }
})



export default estilo;