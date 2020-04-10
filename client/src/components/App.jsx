import React from 'react';
// import '../sass/main.scss';
import { data } from '../../../utilities/data.js';

import SearchBar from './Searchbar.jsx';

const App = () => {
  console.log(data);
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
