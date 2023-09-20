import React, { useState } from 'react';
import Scroll from './scroll';
import SearchList from './searchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .description
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <form>
      <div>
        <h1>Explore Products</h1>
      </div>
      <div>
        <input 
          className="box"
          type = "search" 
          placeholder = "Search Items..." 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
      <footer>Made with ❤️</footer>
    </form>
  );
}

export default Search;