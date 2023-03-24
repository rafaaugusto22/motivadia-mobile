import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;
    

const estilo = StyleSheet.create({
    
    
    textoHeader:{
        flexGrow:1,
        fontFamily: "Raleway-SemiBold",
        fontSize:22,
        color:"#707070"
    }
})
export default estilo;