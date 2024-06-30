import { useState } from "react";

//need to fix this to prevent default file prompt from opening as well
const FolderInput = ({label}: {label: string}) => {

  const [outputDirectory, setDirectory] = useState('');

  function handleFolderSelect(event) {
    event.preventDefault()
    //@ts-ignore
    const outputFolder = window.api.selectFolder().then(event => {return event})
    console.log(outputFolder)
    const input = document.getElementById('input')
    if(outputFolder != undefined) {
      input?.setAttribute('value', outputFolder)
    }
  }

  return (
    <div onClick={handleFolderSelect}>
      <label className="form-control w-full max-w-xs px-2">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input type="file" id='input' className="file-input file-input-bordered w-full max-w-xs file-input-primary" onChange={handleFolderSelect}/>
      </label>
    </div>
  )
}

export default FolderInput