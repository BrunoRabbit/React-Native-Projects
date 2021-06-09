import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import topIMG from './src/assets/top.png';
import jungleIMG from './src/assets/jungle.png';
import midIMG from './src/assets/mid.png';
import adcIMG from './src/assets/adc.png';
import supIMG from './src/assets/support.png';


export default function App() {
  var champions = [
  {
    id: 1,
    nome: 'Jarvan',
    rota: 'jungle',
  },
  {
    id: 2,
    nome: 'Amumu',
    rota: 'jungle',
  },
  {
    id: 3,
    nome: 'Yorick',
    rota: 'top',
  },
  {
    id: 4,
    nome: 'Sett',
    rota: 'top',
  },
  {
    id: 5,
    nome: 'Ahri',
    rota: 'mid',
  },
  {
    id: 6,
    nome: 'Kassadin',
    rota: 'mid',
  },
  {
    id: 7,
    nome: 'Jhin',
    rota: 'adc',
  },
  {
    id:8,
    nome: 'Draven',
    rota: 'adc',
  },
  {
    id: 9,
    nome: 'Janna',
    rota: 'sup',
  },
  {
    id: 10,
    nome:'Lulu',
    rota: 'sup',
  },
];

  const [data,setData] = useState([]);

  useEffect(() => {
    setData(champions);
  },[]);

  function handleSearchRoute(x) {
    // const filtredChampion = champions.map(response => {
    //   if(response.rota)
    // } response.rota === x);
    const filtredChampion = champions.filter(response => response.rota === x);
    setData(filtredChampion);
    
    console.log(filtredChampion);
  }
  
    
  return (
    <SafeAreaView style={styles.container}>
        <Text>Selecione uma Rota!</Text>
        <StatusBar style="auto" />

      <View style={styles.imageArea}>
        
        <TouchableOpacity onPress={()=>handleSearchRoute("top")}>
          <Image source={topIMG} style={styles.icon} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>handleSearchRoute("jungle")}>
          <Image source={jungleIMG} style={styles.icon} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>handleSearchRoute("mid")}>
          <Image source={midIMG} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handleSearchRoute("adc")}>
          <Image source={adcIMG} style={styles.icon} />
        </TouchableOpacity>
          
        <TouchableOpacity onPress={()=>handleSearchRoute("sup")}>
          <Image source={supIMG} style={styles.icon} />  
        </TouchableOpacity>
      </View>
      <View style={styles.dataArea}>
        <FlatList 
        data = {data}
        keyExtractor = {item => item.id}
        renderItem = {({item})=>(
          <Text>
            {item.nome
            }
          </Text>
        )}
        />
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
  },
  icon:{
    width: 50,
    height: 50,
    
  },
  imageArea: {
    flexDirection: 'row',

  },
  dataArea:{
    flex: 1,
  }
});
