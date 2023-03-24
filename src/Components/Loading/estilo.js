import {StyleSheet, Dimensions} from "react-native"
import {logoSize} from "../../Api/image"

const largura = Dimensions.get("screen").width;
    
var dims = logoSize(39,50);

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
      },
      texto:{
        fontFamily:'Raleway-Bold',
        fontSize:16,
        color:'#707070',
        textAlign:'center'
      }
})



export default estilo;