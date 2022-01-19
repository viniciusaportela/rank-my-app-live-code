import styled from 'styled-components';

export const Modal = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: rgba(0,0,0,0.3);
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const ModalCloseButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 4px;
`

export const ModalCard = styled.div`
  width: 90%;
  padding: 10px;
  max-width: 500px;
  height: fit-content;
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
`

export const ModalTitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 25px;
`

export const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
`