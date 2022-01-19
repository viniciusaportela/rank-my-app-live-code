import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 8px;
  cursor: pointer;
`

export const CardImage = styled.img`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 150px;
  height: 150px;
`

export const CardRight = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  flex: 1;
`

export const CardTitle = styled.span`
  font-size: 20px;
`

export const CardText = styled.span`
  font-size: 15px;
`