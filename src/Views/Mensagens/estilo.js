import {StyleSheet,Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
   container: {
            flex: 1,
            marginTop: 10,
          },
          item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          },texto:{
            fontFamily: "Raleway-SemiBold",
            fontSize:16,
            color:"#77BEF5",
            textAlign:"center"
          },textoHeader:{
            flexGrow:1,
            fontFamily: "Raleway-SemiBold",
            fontSize:22,
            color:"#707070"
          },loading:{
            flex:1
          },bunner:{
            flex:1,
            width:largura
          }
          
})
export default estilo;