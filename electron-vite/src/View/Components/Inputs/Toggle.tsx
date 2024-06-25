const Toggle = ( 
  {text, isCheckedSet}: {
    text: string, isCheckedSet(input: boolean): void
  } ) => {
  // you pass in a function to toggle the check so you can properly handle states, if you just passed in the state's value you wouldn't be able to set it properly

  const change = (e) => {
    isCheckedSet(e.target.value)
  }

  return (
    <>
      <div className="form-control w-auto">
        <label className="cursor-pointer label">
          <span className="label-text">{text}</span> 
          <br />
          <input type="checkbox" className="toggle toggle-primary" defaultChecked onChange={change} />
        </label>
      </div>
    
    <style>
      
    </style>
    </>
  )
}

export default Toggle