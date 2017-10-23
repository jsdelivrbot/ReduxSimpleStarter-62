import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAlb2sM2e-tINyLsUtivyxSdKaU8Q39Dao ';

YTSearch(
  {key: API_KEY, term: 'kevin Mighty cat'},
  function(data) {
    console.log(data);
  }
);

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);