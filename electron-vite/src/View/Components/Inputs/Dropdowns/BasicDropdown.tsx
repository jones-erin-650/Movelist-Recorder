// gets passed in an array of characters and renders them in a selectable list so it's scaleable with other games
const BasicDropdown = (
  {characters, text, onChangeHandler}: {
    characters: string[], 
    text: string, 
    //  this is so you can bind different variables to this component
     onChangeHandler(input: string): void},
  ) => {

  const change = (e) => {
    onChangeHandler(e.target.value)
  }

  return (
    <>
      <select className="select select-primary w-full max-w-xs" onChange={change}>
        <option disabled selected>    
          {text}
        </option>
        {characters.map((character, index) =>
          <option key={index}>{character}</option>
        )}
        
      </select>

          
    </>
  )
}

export default BasicDropdown