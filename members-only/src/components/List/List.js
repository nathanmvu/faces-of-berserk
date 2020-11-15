import React from 'react';
import './List.css';

function List({ characters, setCharacters}) {
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col' onClick={() => setCharacters({ type: 'sortName'})}>Name</th>
            <th scope='col' onClick={() => setCharacters({ type: 'sortType'})}>Character Type</th>
            <th scope='col' onClick={() => setCharacters({ type: 'sortWeapon'})}>Weapon</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => 
          <tr key={character.id}>
            <td><img id={character.name} src={character.image} alt={character.name} /></td>
            <td>{character.name}</td>
            <td>{character.type}</td>
            <td>{character.weapon}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;