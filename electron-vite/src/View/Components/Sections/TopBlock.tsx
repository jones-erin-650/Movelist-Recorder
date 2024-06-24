import FileInput from '../Inputs/FileInput'
import TekkenDropdown from '../Inputs/Dropdowns/TekkenDropdown'

const TopBlock = () => {
  return (

    <div className="flex flex-col w-full border-opacity-50 py-2">
      <div className="grid grid-cols-2 h-auto card bg-base-300 rounded-box place-items-center pb-4">
        <FileInput
          label='Input movelist text file'
        />
        <div className="mt-9">
          <TekkenDropdown />
        </div>
      </div>
    </div>
  )
}

export default TopBlock