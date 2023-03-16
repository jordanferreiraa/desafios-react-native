import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity
  } from 'react-native';

  import {Picker} from '@react-native-community/picker';
  import Slider from '@react-native-community/slider';

export default function App(){
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [limite, setLimite] = useState(250);
  const [estudante, setEstudante] = useState(false);
  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState([
    {sexoNome: 'Masculino', valor: 1},
    {sexoNome: 'Feminino', valor: 2},
  ]);


  //Metodo que é chamado quando você clica no botao Abrir Conta
  function enviarDados(){

    if(nome === '' || idade === ''){
      alert('Preencha todos dados corretamente!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+nome + '\n' + 
      'Idade: ' + idade + '\n' +
      'Sexo: '+ sexos[sexo].sexoNome + ' \n' +
      'Limite Conta: ' + limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + (estudante ? 'Ativo' : 'Inativo')
      );
  
  }

    //Retorna os items do Picker do sexo M ou F
    let sexoItems = sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome}/>
    }); 

    return(
      <View style={styles.container}>
      <Text style={styles.bancoLogo}>Banco Sujeito</Text>

      <View style={styles.areaFormulario}>

   
        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={(texto) => setNome(texto)}
            
        />

        <Text style={styles.textoNome}>Idade:</Text>
        <TextInput style={styles.input} 
            placeholder="Digite sua idade"
            onChangeText={(texto) => setIdade(texto)}
            keyboardType="numeric" // Deixando teclado apenas numerico
        />
     
        <View style={styles.areaSexo}>  
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker style={styles.pickerSexo} 
                  selectedValue={sexo} 
                  onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>  
                            
          {sexoItems}
          
          </Picker>
        </View>

        <View style={styles.limiteArea}>
              <Text style={styles.textoNome}>Seu Limite:</Text>
              <Text style={styles.limiteTexto}>R$ {limite.toFixed(0)}</Text>
        </View> 

        <View style={styles.areaSlider}>
            <Slider 
              minimumTrackTintColor="#CF0000" 
              minimumValue={250} //Valor minimo do slide
              maximumValue={2000} //Valor máximo do slide
              value={limite}
              onValueChange={(limite)=> setLimite(limite)}
            />
        </View>


        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Estudante:</Text>
          <Switch 
          style={{paddingTop: 15}}
          trackColor="#00c300" 
          value={estudante} 
          onValueChange={(valorEstudante) => setEstudante(valorEstudante)}
          />
        </View>


      
        <TouchableOpacity style={styles.botao} onPress={ enviarDados } >
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>
  

      </View>

      </View>    
    );

}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
  },
  areaFormulario:{
    flexDirection: 'column',
    margin: 10,
  },
  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  input:{
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 38,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  areaSexo:{
     flexDirection: 'row',
     alignItems: 'center',
     paddingBottom: 5
 },
 pickerSexo:{
    flex:1
  },
  limiteArea:{
    flexDirection:'row',
    paddingBottom: 5,
},
limiteTexto:{
  color: '#FF0000',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaEstudante:{
  flexDirection: 'row', 
  alignItems: 'center'
},
botao:{
 height: 35,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#000000',
 borderRadius: 150,
 margin: 20
},
botaoTexto:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#FFFFFF'
},

});

