function List({ characters, setCharacters}) {
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <th scope='col'>Image</th>
          <th scope='col' onClick={() => setCharacters({ type: 'sort'})}>Name</th>
          <th scope='col'>Character Type</th>
        </thead>
        <tbody>
          {characters.map(character => 
          <tr key={character.id}>
            <td><img id={character.name} src={character.image} alt={character.name} /></td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  )
}