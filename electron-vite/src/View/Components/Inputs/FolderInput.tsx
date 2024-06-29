//need to fix this to prevent default file prompt from opening as well

function openFolderDialog() {
  //@ts-ignore
  window.api.selectFolder();
}

const FolderInput = ({label}: {label: string}) => {


  return (
    <div onClick={openFolderDialog}>
      <label className="form-control w-full max-w-xs px-2">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs file-input-primary" />
      </label>
    </div>
  )
}

export default FolderInput