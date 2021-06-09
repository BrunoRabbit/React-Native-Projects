import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PokemonTypeText, IdPokemonText, PokemonNameText, ImageFromSitePokemon, BottomBarView, BottomBar, SafeView } from './styles';

export default function PokemonGenerateScreen () {
    const route = useRoute();
    return(
        <SafeAreaView>
                <View>
                  <PokemonNameText>{route.params.name}</PokemonNameText>
                  <ImageFromSitePokemon source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${route.params.id}.png`}}/>
                </View>
         

            <BottomBarView>
                <BottomBar>
                  <View>  
                    <Text>ID: </Text>
                    <IdPokemonText>#{route.params.id}</IdPokemonText>
                  </View>

                  <View>
                    <Text>Tipo: </Text>
                    <PokemonTypeText PokemonTypeColor={route.params.cor}>{route.params.tipo}</PokemonTypeText>
                  {route.params.tipo2 &&
                    <PokemonTypeText PokemonTypeColor={route.params.cor2}>{route.params.tipo2}</PokemonTypeText>
                  }
                  </View>
                  <SafeView>
                    <Text>{route.params.hist}</Text>
                  </SafeView>

                 
                </BottomBar>
            </BottomBarView>
        </SafeAreaView>
    );
}
