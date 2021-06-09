import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import gordinhoImg from './src/assets/user.jpg';
export default function App() {
  const [show, useShow] = useState(true)
  return (
    <View style={styles.container}>
      {show&&
      <>
    <Image style={styles.image} source={gordinhoImg}/>
  <Text>Parabens vc descobriu o gordinho</Text>
  </>
  }

      <Button title="clique aqui" onPress={()=> useShow(!show)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    height: 45,
    width: "68%",
    borderColor: "red",
    borderWidth: 1,
    margin: 5,
    
  },
  image: {
    height:110,
    width:100,

  }
});
