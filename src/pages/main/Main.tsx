import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { SearchButton } from '../../components/SearchButton/SearchButton.styles';
import { RICK_AND_MORTY_API_BASE_URL } from '../../constants/contants';
import { ICharacter } from '../../typings/character.interface';
import { CardsContainer, FilterContainer, FilterInput, PageContainer } from './Main.styles';
import ReactPaginate from 'react-paginate';
import './Main.css'
import { CharacterModal } from '../../components/CharacterModal/CharacterModal';

function Main() {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<undefined | ICharacter>(undefined);

  const generateUrl = useCallback(() => {
    let finalUrl = `${RICK_AND_MORTY_API_BASE_URL}/character/?page=${page}`

    if (filter) {
      finalUrl += `&name=${filter}`;
    }

    return finalUrl
  }, [page, filter])

  useEffect(() => {
    search();
  }, [page]);

  const handleFilterChange = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev.target.value);
    setFilter(ev.target.value);
  }

  const handlePageChange = (event: { selected: number }) => {
    console.log('page change', event)
    setPage(event.selected + 1);
  }

  const search = async () => {
    const result = await axios.get(generateUrl())
    setPageCount(result.data.info.pages);
    setCharacters(result.data.results);
  }

  const openModal = (character: ICharacter) => {
    setIsModalOpen(true);
    setSelectedCharacter(character);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <PageContainer>
      {isModalOpen && <CharacterModal character={selectedCharacter} onClose={closeModal}/>}
      <FilterContainer>
        <FilterInput onChange={handleFilterChange} placeholder='Character name'/>
        <SearchButton onClick={search}>Search</SearchButton>
      </FilterContainer>
      <CardsContainer>
        {characters.map(character =>
          <CharacterCard character={character} onClick={openModal}/>)
        }
      </CardsContainer>
      <ReactPaginate 
        pageCount={pageCount}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageChange}
        previousLabel="< prev"
        renderOnZeroPageCount={() => null}
        className='pagination'
      />
    </PageContainer>
  )
}

export default Main;
