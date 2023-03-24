import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;
    

const estilo = StyleSheet.create({
    
    container: {
        marginTop: 2,
        flexDirection:'row',
        backgroundColor:"#FFFFFF",
        padding:10,
        height:48,
        justifyContent:'space-between'

    },
    textoHeader:{
        flexGrow:1,
        fontFamily: "Raleway-SemiBold",
        fontSize:22,
        color:"#707070"
      },contentTexto:{
        padding:2,
        marginLeft:4,
        flexGrow:1,
        alignItems:"flex-start"
      },texto:{
        fontFamily: "Raleway-Regular",
        fontSize:16,
        color:'#707070'
      }
})
export default estilo;