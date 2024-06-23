const Toggle = ({text}: {text: string}) => {
  return (
    <>
      <div className="form-control w-52">
        <label className="cursor-pointer label">
        <span className="label-text">{text}</span> 
        <input type="checkbox" className="toggle toggle-primary" checked />
      </label>
    </div>
    </>
  )
}

export default Toggle