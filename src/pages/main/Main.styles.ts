import styled from 'styled-components';

export const PageContainer = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 40px);
  padding: 40px;
`

export const CardsContainer = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`

export const FilterInput = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 5px;
  display: flex;
  margin-right: 5px;
  flex: 1;
`

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
`