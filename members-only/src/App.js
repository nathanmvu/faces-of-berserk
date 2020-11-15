import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
// import List from './components/List/List';
import Characters from './components/members.json';
import './App.css';

function App() {

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
    </div>
  );
}

export default App;
