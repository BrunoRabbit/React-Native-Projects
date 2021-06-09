import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import PokemonGenerateScreen from '../pages/PokeScreen';
import HomeScreen from '../pages/Home';
import { HeaderViewContainer } from './styles';

function ReturnPage({ navigation }) {
    return (
      <HeaderViewContainer>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </HeaderViewContainer>
    );
  }
  const Stack = createStackNavigator();
  
  export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                  gestureEnable: true,
                  gestureDirection: "horizontal",
                  ...TransitionPresets.SlideFromRightIOS,
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                  // transitionSpec:{
                  //   open: config,
                  //   close:closeConfig,
                  // }
                }}
              animation="fade"
            >
              <Stack.Screen name="Pokedex" component={HomeScreen} />
              <Stack.Screen name="PokemonGenerateScreen" component={PokemonGenerateScreen} />
              <Stack.Screen name="ReturnPage" component={ReturnPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }