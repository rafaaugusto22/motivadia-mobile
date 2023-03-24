import {StyleSheet, Dimensions} from "react-native"
import {logoSize} from "../../../Api/image"

const largura = Dimensions.get("screen").width;
    
var dims = logoSize(39,50);

const estilo = StyleSheet.create({
    container:{
        flexGrow:1,
        flexDirection:"row",
        alignItems: "center"
    },imagem:{
        width: dims.width,
        height:dims.height,
        resizeMode: 'contain'
    },texto:{
        marginLeft:17,
        fontSize:22,
        fontFamily:"Raleway-SemiBold",
        color:"#707070"
    }
})



export default estilo;