import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView} from 'react-native';

export default function App() {
  const [count, useCount] = useState(0)
  
  return (
    <SafeAreaView style={styles.container}>
    <Text>Selecione a gorjeta</Text>
      <StatusBar style="auto" />

    <View style={styles.areaButton}>

      <TouchableOpacity onPress={()=>useCount(count+5)}>
        <Text style={styles.btn}>Adicionar +5</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>useCount(count+10)}>
        <Text style={styles.btn}>Adicionar +10</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>useCount(count+15)}>
        <Text style={styles.btn}>Adicionar +15</Text>
      </TouchableOpacity>


    </View>

      <Text>{count}</Text>
      <TouchableOpacity onPress={()=>useCount(count*0)}>
      <Text  style={styles.btn}>Clique para resetar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaButton:{
   flexDirection:'row',
   backgroundColor: '#DDDDDD',
   padding: 4,
  },
  btn: {
    margin: 10,
    backgroundColor:'#DDDDDD',
    
  },

});
