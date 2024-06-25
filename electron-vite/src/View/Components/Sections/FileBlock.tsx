import { useErrorComments } from "../../../Model/File-Handling"
import BasicButton from "../BasicButton"
import Download from "../Inputs/Download"
import SoftwareDropdown from "../Inputs/Dropdowns/SoftwareDropdown"
import Toggle from "../Inputs/Toggle"
import ConsoleBlock from "./ConsoleBlock"

const FileBlock = () => {

  const errorComments = useErrorComments((state) => state.errorComments)

  const toggleErrorComments = useErrorComments((state) => state.toggleErrorComments)

  console.log('error comments: ' + errorComments)


  return (
    <div className="flex w-full align-content: center">
        
      {/* left side with file handling */}
      <div className="h-auto w-2/6 card bg-base-300 rounded-box place-items-left p-4">

        <SoftwareDropdown />

        <br />

        <Toggle 
          text='Comment out errors?' 
          isCheckedSet={toggleErrorComments}
        />

        <br />

        <BasicButton text='Start file parsing' color="primary" size='md'/>

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