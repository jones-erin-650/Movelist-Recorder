import React from 'react'
// import { FaBeer } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

// gets passed in an array of characters and renders them in a selectable list so it's scaleable with other games
const BasicDropdown = ({characters}: {characters: string[]}) => {
  return (
    <>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn ">Select Your Character
          <IoIosArrowDown />
        </div>
          <div className="max-h-screen overflow-y-auto">
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96 max-h-96 overflow-y">
              {characters.map((character, index) =>
                <li key={index}>
                  <a>
                    {character}
                  </a>
                </li>
              )}
            
            </ul>
          </div>
      </div>
          
    </>
  )
}

export default BasicDropdown