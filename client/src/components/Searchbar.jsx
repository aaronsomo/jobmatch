import React, { useState } from 'react';

const SearchBar = () => {
  const [input, handleInput] = useState('');

  const submitInput = () => {};

  return (
    <div class="container">
      <div class="title">JoB-mAtCh</div>
      <input
        class="search"
        placeholder="search job position here"
        onChange={(e) => handleInput(e.target.value)}
      />
      <button class="search-button" onClick={submitInput}>Search</button>
    </div>
  );
};

export default SearchBar;
