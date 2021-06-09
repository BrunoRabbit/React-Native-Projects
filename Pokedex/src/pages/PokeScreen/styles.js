import styled from 'styled-components/native';

export const PokemonTypeText = styled.Text`
    color: ${props => props.PokemonTypeColor};
    border-radius: 60px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-top: 5px;
    width: 100px;
    height: 20px;
    text-align:center;
    align-content:center;
    background-color: #faebd7;
`;

export const ImageBackgroundPokemonView = styled.View`
    background-color: ${props=> props.ImageBackgroundPokemonColor};
   
`;

export const PokemonNameText = styled.Text`
    color: #000;
    background-color: #add8e6;
    width: 100px;
    height: 20px; 
    align-self: center;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const ImageFromSitePokemon = styled.Image`
    width: 250px;
    height: 250px;
    alignSelf: center;
    resize-mode: stretch;
`;

export const BottomBarView = styled.View`
    background-color: #000;
    
`; 

export const BottomBar = styled.View`
    background-color: #fff;
    height: 100%;
    margin-top: 5px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;    
    padding-horizontal: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const IdPokemonText = styled.Text`
    border-radius: 60px;
    margin-top: 5px;
    width: 100px;
    height: 20px; 
    padding-horizontal: 35px;
    background-color: #faebd7;
`;
export const SafeView = styled.View`
    width: 200px;
    height: 200px;
    right: 100px;
    bottom: -100px;
    `;