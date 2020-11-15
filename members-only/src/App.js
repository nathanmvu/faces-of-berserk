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
        case 'change':
          return action.input;
        case 'sort':
          return [...state].sort((a, b) => (a.name > b.name) ? 1 : -1);
        default:
          return Characters;
      }
    }, Characters)

  const handleInputChange = (search) => {
    const searchArray = [];
    for(let i = 0; i < Characters.length; i++) {
      if(Characters[i].name.includes(search)){
        searchArray.push(Characters[i])
      }
    }
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
