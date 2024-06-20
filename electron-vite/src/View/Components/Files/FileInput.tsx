

const FileInput = ({label}: {label: string}) => {

  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
      </label>
    </>
  )
}

export default FileInput