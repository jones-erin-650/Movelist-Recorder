import FileInput from '../Inputs/FileInput'
import TekkenDropdown from '../Inputs/Dropdowns/TekkenDropdown'

const TopBlock = () => {
  return (

    <div className="flex flex-col w-full border-opacity-50 py-2">
      <div className="grid h-auto card bg-base-300 rounded-box place-items-center">
        <FileInput
          label='Input movelist text file'
        />
        <TekkenDropdown />
      </div>
    </div>
  )
}

export default TopBlock