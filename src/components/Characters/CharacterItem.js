import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.image} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>House:</strong> {item.house}
              </li>
              <li>
                <strong>Species:</strong> {item.species}
              </li>
              <li>
                <strong>Birthday:</strong> {item.dateOfBirth}
              </li>
              <li>
                <strong>Status:</strong> {item.alive ? "Alive" : "Dead"}
              </li>
              <li>
                <strong>Patronus:</strong> {item.patronus}
              </li>
              <li>
                <strong>Actor:</strong> {item.actor}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterItem
