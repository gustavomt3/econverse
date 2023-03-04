//React
import React from 'react';
//Imagens
import SearchIcon from '../../Assests/SearchIcon';

const Search = () => {
  return (
    <>
      <input type="text" placeholder="O que você está buscando?" id="serch" />
      <button>
        <SearchIcon />
      </button>
    </>
  );
};

export default Search;
