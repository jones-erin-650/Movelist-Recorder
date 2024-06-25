import { useMovelist } from '../../../Model/File-Handling'

const FileInput = ({label}: {label: string}) => {

  const movelist = useMovelist((state) => state.movelist)

  const setMovelist = useMovelist((state) => state.setMovelist)

  const change = (e) => {
    setMovelist(e.target.value)
  }

  console.log('input file: ' + movelist)

  return (
    <>
      <label className="form-control w-full max-w-xs px-2">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs file-input-primary" onChange={change}/>
      </label>
    </>
  )
}

export default FileInput