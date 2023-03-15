import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Usuario(props) {
  return(
    <View style={styles.container} >
      <Text style={styles.texto} >
        Nome: {props.nome}
      </Text>
      <Text style={styles.texto} >
        Cargo: {props.cargo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    paddingTop: 50,
    backgroundColor: '#020e26',
  },
  texto: {
    fontSize: 30,
    color: '#FFF'
  }
})