import React from 'react'
import { ICharacter } from '../../typings/character.interface'
import { CharacterImage, Modal, ModalCard, ModalCloseButton, ModalHeader, ModalTitle } from './CharacterModal.styles'

interface ICharacterModalProps {
  character?: ICharacter;
  onClose?: () => void;
}

interface ICharacterDetailLineProps {
  detailName: string;
  value: string;
}

export const CharacterDetailLine: React.FC<ICharacterDetailLineProps> = ({ detailName, value }) => {
  return <span><b>{detailName}</b>: {value}</span>
}

export const CharacterModal: React.FC<ICharacterModalProps> = ({ character, onClose }) => {
  return <Modal>
    <ModalCard>
      {character && <>
        <ModalHeader>
          <div style={{ display: 'flex', flex: 1 }}></div>
          <div style={{ display: 'flex', flex: 2 }}>
            <ModalTitle>{character.name}</ModalTitle>
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
          </div>
        </ModalHeader>
        <CharacterImage src={character.image} />
        <CharacterDetailLine detailName="status" value={character.status}/>
        <CharacterDetailLine detailName="species" value={character.species}/>
        <CharacterDetailLine detailName="type" value={character.type}/>
        <CharacterDetailLine detailName="gender" value={character.gender}/>
      </>}
    </ModalCard>
  </Modal>
}