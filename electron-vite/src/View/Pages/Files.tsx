import FileInput from "../Components/Inputs/FileInput"
import TekkenDropdown from "../Components/Inputs/Dropdowns/TekkenDropdown"
import TopBlock from "../Components/Sections/TopBlock"
import SoftwareDropdown from "../Components/Inputs/Dropdowns/SoftwareDropdown"
import Toggle from "../Components/Inputs/Toggle"

const Files = () => {
  return (
    <>
      <TopBlock />

      <div className="divider divider-primary">File Parsing</div>



      <div className="flex w-full align-content: center">
        
        {/* left side with file handling */}
        <div className="h-auto w-1/2 card bg-base-300 rounded-box place-items-left p-4">

          <SoftwareDropdown />

          <br />

          <Toggle text='Comment out errors?' />
            
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-auto w-1/2 card bg-base-300 rounded-box place-items-center"></div>
        
      </div>



    </>



  )
}

export default Files