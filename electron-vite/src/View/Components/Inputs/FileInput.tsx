const FileInput = ({label}: {label: string}) => {

  return (
    <>
      <label className="form-control w-full max-w-xs px-2">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs file-input-primary" />
      </label>
    </>
  )
}

export default FileInput