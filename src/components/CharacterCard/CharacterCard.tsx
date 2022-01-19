import React from "react";
import { ICharacter } from "../../typings/character.interface";
import { Card, CardImage, CardRight, CardText, CardTitle } from "./characterCard.styles";
import './characterCard.styles.ts'

interface ICharacterCardProps {
  character: ICharacter;
  onClick?: (character: ICharacter) => void;
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({ 
  character,
  onClick
}) => {
  return <Card onClick={() => onClick?.(character)}>
    <CardImage src={character.image}/>
    <CardRight>
      <CardTitle>{character.name}</CardTitle>
      <CardText><b>Specie</b>: {character.species}</CardText>
    </CardRight>
  </Card>
}