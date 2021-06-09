import styled from 'styled-components/native';

export const PokemonText = styled.Text`
    background-color: rgba(255,255,255,0.5);
    color: #000;
    height: 30px;
    width: 100px;
    text-align: center;
    margin: 20px;
    padding: 7px;
    margin-top: 5px;
    border-radius: 30px;
`;

export const PokemonImageBackground = styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const TxtInput = styled.TextInput`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 20%;
  border: 1px solid #000;
  width: 200px;
  height: 25px;
`;

export const AreaPokemons = styled.View`
  align-items: center;
  margin-top: 30px;
  height: 80%;
  width: 100%;
`;

export const SearchButton = styled.TouchableOpacity`
    background-color: #4169e1;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 80%;
    padding: 10px;
    margin-top: 30px;
    margin-left: 10px;
    align-self: center;
    border-radius: 15px;
`;


export const PokemonsButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-right: 50%;
`;

export const ButtonTextForSearch = styled.Text`
    color: #fdfd96;
`;