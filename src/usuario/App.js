import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Usuario from './src/Usuario';

export default function App() {
  return(
    <View style={styles.container} >

      <Text style={styles.texto} >Seja Bem-Vindo</Text>

      <Usuario nome="jordan" cargo="programador" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  texto: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold'
  }
})