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

    return(
      <View style={styles.container} >
        <Text>Olaaa</Text>
      </View> 
    );

}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
  },

});