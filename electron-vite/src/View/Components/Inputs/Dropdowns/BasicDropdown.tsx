// gets passed in an array of characters and renders them in a selectable list so it's scaleable with other games
const BasicDropdown = (
    {characters, text}: {characters: string[], text: string},
  ) => {
  return (
    <>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>{text}</option>
        {characters.map((character, index) =>
          <option key={index}>{character}</option>
        )}
        
      </select>

          
    </>
  )
}

export default BasicDropdown