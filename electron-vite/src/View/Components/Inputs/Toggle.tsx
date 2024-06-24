const Toggle = ( 
  {text}: {text: string},
  {isChecked}: {isChecked: boolean} 
               ) => {
  
  

  return (
    <>
      <div className="form-control w-auto">
        <label className="cursor-pointer label">
          <span className="label-text">{text}</span> 
          <br />
          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
        </label>
      </div>
    
    <style>
      
    </style>
    </>
  )
}

export default Toggle