import React, { Fragment } from 'react';
import { Image, View, Text } from "react-native";
import estilo from "./estilo";

const LogoTitle = () => {

    
  return (
    <Fragment>
      <View style={estilo.container}>
      <Image
          source={require("../../../../resources/img/logo-min.png")}
          style={estilo.imagem}
      />
      <Text style={estilo.texto}>MotivaDia</Text>
      </View>
    </Fragment>
  )
};
export default LogoTitle;

