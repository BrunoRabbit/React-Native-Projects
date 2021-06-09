import React, { useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import PokeList from '../List';
import { useNavigation } from '@react-navigation/native';
import { PokemonText, PokemonImageBackground, TxtInput, AreaPokemons, SearchButton, PokemonsButton, ButtonTextForSearch } from './styles';

const Img ={uri: "https://www.wallpaperkiss.com/wimg/b/167-1674145_big.png"};

export default function HomeScreen () {
  const [inputTxt, setInputTxt] = useState('');
  const [ useList, setUseList ] = useState([]);
  const  navigation  = useNavigation();
  
  useEffect(() => {
    setUseList(PokeList);
  },[]);
  
  useEffect(() => {
    if(inputTxt === ''){
      setUseList(PokeList);
    }
  },[inputTxt]);

  function handleSearchPokemon(x) {
    const filtredPokemon = useList.filter(response => response.name === x );
    setUseList(filtredPokemon);
    console.log(filtredPokemon);
  }

  return (
    <PokemonImageBackground source={Img}>
        <TxtInput value={inputTxt} onChangeText={t=>setInputTxt(t)}/>
        
        <SearchButton onPress={()=>handleSearchPokemon(inputTxt)}>
          <ButtonTextForSearch>Search Pokemon</ButtonTextForSearch>
        </SearchButton>
          <AreaPokemons>
            <FlatList 
              showsVerticalScrollIndicator={false}
              data={useList}
              keyExtractor={(item) => item.id}
              renderItem={({item}) =>(
                
                <PokemonsButton onPress={() => navigation.navigate('PokemonGenerateScreen',
                {id: item.id, name: item.name, tipo: item.tipo, tipo2: item.tipo2, cor: item.cor, cor2: item.cor2, hist: item.hist})}>
                
                    <PokemonText>
                      {item.name
                      }
                    </PokemonText>
                 
                </PokemonsButton>
              )}/>      
          </AreaPokemons>        
        </PokemonImageBackground>
    );
}
