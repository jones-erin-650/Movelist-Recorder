import FileInput from "../Components/Inputs/FileInput"
import TekkenDropdown from "../Components/Inputs/Dropdowns/TekkenDropdown"
import TopBlock from "../Components/Sections/TopBlock"
import SoftwareDropdown from "../Components/Inputs/Dropdowns/SoftwareDropdown"
import Toggle from "../Components/Inputs/Toggle"
import Download from "../Components/Inputs/Download"

const Files = () => {
  return (
    <>
      <TopBlock />

      <div className="divider divider-primary">File Parsing</div>



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
        <div className="grid h-auto w-full  card bg-base-300 rounded-box place-items-center"></div>
        
      </div>



    </>



  )
}

export default Files