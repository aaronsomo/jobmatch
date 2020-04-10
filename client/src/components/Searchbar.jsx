import React, { useState } from 'react';

const SearchBar = () => {
  const [input, handleInput] = useState('');

  const submitInput = () => {};

  return (
    <div>
      <input
        placeholder="search job position here"
        onChange={(e) => handleInput(e)}
      />
      <button>Search</button>
      <button onClick={submitInput}>Search</button>
    </div>
  );
};

export default SearchBar;
