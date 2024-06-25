import Download from "../Inputs/Download"
import SoftwareDropdown from "../Inputs/Dropdowns/SoftwareDropdown"
import Toggle from "../Inputs/Toggle"


import ConsoleBlock from "./ConsoleBlock"

const FileBlock = () => {
  return (
    <div className="flex w-full align-content: center">
        
      {/* left side with file handling */}
      <div className="h-auto w-2/6 card bg-base-300 rounded-box place-items-left p-4">

        <SoftwareDropdown />

        <br />

        <Toggle text='Comment out errors?' />

        <br />

        <Download />
          
      </div>
      <div className="divider divider-horizontal divider-primary"></div>
      <div className="grid h-auto w-full  card bg-base-300 rounded-box place-items-center">
        <ConsoleBlock />
      </div>
      
    </div>
  )
}

export default FileBlock