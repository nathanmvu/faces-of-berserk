import React, { useReducer } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import List from './components/List/List';
import Characters from './components/Characters.json';
import './App.css';

function App() {
  const [characterState, setCharacters] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'search':
          return action.input;
        case 'sortName':
          return [...state].sort((x, y) => (x.name > y.name) ? 1 : -1);
        case 'sortType':
          return [...state].sort((x, y) => (x.type > y.type) ? 1 : -1);
        case 'sortWeapon':
          return [...state].sort((x, y) => (x.weapon > y.weapon) ? 1 : -1);
        default:
          return Characters;
      }
    }, Characters)

  const handleInputChange = (search) => {
    const searchArray = [];
    for(let i = 0; i < Characters.length; i++) {
      if(Characters[i].name.includes(search) || 
      Characters[i].name.toLowerCase().includes(search) || 
      Characters[i].weapon.includes(search) ||
      Characters[i].weapon.toLowerCase().includes(search)){
        searchArray.push(Characters[i])
      }
    }
    setCharacters({
      type: 'search',
      input: searchArray
    });
  }

  return (
    <div className="App">
      <Header />
      <Search 
        handleInputChange = { handleInputChange }
      />
      <List characters={ characterState } setCharacters={ setCharacters }/>
    </div>
  );
}

export default App;
