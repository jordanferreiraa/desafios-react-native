import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState("Sexo");
  const [limite, setLimite] = useState(250);
  const [estudante, setEstudante] = useState(false)

  function abrir() {
    if(nome === '' || idade === '' || sexo === '') {
      alert("Preencha os campos!!!")
      return
    }else {
      alert(`
        Nome: ${nome}
        Idade: ${idade}
        Sexo: ${sexo}
        Limite: R$ ${limite.toFixed(0)}
        Estudante: ${estudante ? 'Sim' : 'Não'}
      `)
    }
  }

  return(
    <View style={styles.container} >

      <Text style={styles.texto} >Banco Sujeito</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={ (text) => setNome(text) }
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua idade'
        onChangeText={ (text) => setIdade(text) }
      />

      <Picker
        selectedValue={sexo}
        onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
        style={styles.picker}
      >
        <Picker.Item key={0} value="Masculino" label="Masculino" />
        <Picker.Item key={1} value="Feminino" label="Feminino" />
      </Picker>

      <View style={styles.limite} >
        <Text style={styles.qualquerTexto} >Limite: {limite.toFixed(0)} </Text>
        <Slider
          minimumValue={0}
          maximumValue={3000}
          value={limite}
          onValueChange={ (limiteSeLecionado) => setLimite(limiteSeLecionado) }
          style={styles.limiteBarra}
        />
      </View>

      <View style={styles.estudante} >
        <Text style={styles.qualquerTexto} >Estudante: </Text>
        <Switch
        value={estudante}
        onValueChange={ (valorSelecionado) => setEstudante(valorSelecionado) }
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={ estudante ? 'green' : 'red' }
      />
      </View>

      <View style={styles.footerBtn} >
        <TouchableOpacity style={styles.btn} onPress={abrir} >
          <View style={styles.btnArea} >
            <Text style={styles.btnTexto} >Abrir Conta</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020e26',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 20,
  },
  qualquerTexto: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 17,
    borderColor: '#ccc',
    width: 350,
  },
  picker: {
    width: 350,
  },
  limite: {
    marginVertical: 20,
  },
  limiteBarra: {
    width: 350,
    marginTop: 10,
  },
  estudante: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  footerBtn: {
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold'
  }
})