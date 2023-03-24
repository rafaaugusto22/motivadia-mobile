import React from 'react';
import { Text, View } from "react-native";
import estilo from "./estilo";


const Loading = () => {

        return (
            <View style={estilo.container}>
            <Text  style={estilo.texto}>Carregando...</Text>
            </View>
        );
};
export default Loading;

