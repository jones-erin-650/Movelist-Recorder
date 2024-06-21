import React from 'react'
import BasicDropdown from './BasicDropdown'

const TekkenDropdown = () => {

  // there's probably a better way to do this considering we already have a whole json file with all the characters' names
  const tekkenCharacters = [
    'Alisa',
    'Asuka',
    'Azucena',
    'Bryan',
    'Claudio',
    'Devil Jin',
    'Dragunov',
    'Eddy',
    'Feng',
    'Hwoarang',
    'Jack-8',
    'Jin',
    'Jun',
    'Kazuya',
    'Kuma',
    'Lars',
    'Law',
    'Lee',
    'Leo',
    'Leroy',
    'Lidia',
    'Nina',
    'Panda',
    'Paul',
    'Raven',
    'Reina',
    'Shaheen',
    'Steve',
    'Victor',
    'Xiaoyu',
    'Yoshimitsu',
    'Zafina'

  ]
    

  return (
    <BasicDropdown 
      characters={tekkenCharacters}
    />
  )
}

export default TekkenDropdown