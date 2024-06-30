import FolderInput from "../Inputs/FolderInput"
import { useFileNaming } from "../../../Model/Screen-Recorder"
import BasicButton from "../BasicButton"
import BasicDropdown from "../Inputs/Dropdowns/BasicDropdown"
import FileInput from "../Inputs/FileInput"
import Toggle from "../Inputs/Toggle"
import Stream from "../Recording/Stream"

const RecordingBlock = () => {
  const dummyArray = ['hi', 'hihi']
  const dummyFunction = () => {}

  const fileNaming = useFileNaming((state) => state.fileNaming)

  const toggleFileNaming = useFileNaming((state) => state.toggleFileNaming)

  console.log('file naming: ' + fileNaming)

  return (
    <>
      <div className="flex w-full align-content: center ">
        
      {/* left side with file handling */}
      <div className="h-auto w-2/6 card bg-base-300 rounded-box place-items-left p-4 ">
        <FolderInput  label='Output folder' />

        <div className="mt-9">
          <Toggle 
            text='Use movelist for names?' 
            isCheckedSet={toggleFileNaming}
          />
        </div>

        <br />
        <div className="pl-2 justify-center">
          <BasicButton text='Start recording sequence' color='primary' size='block'/>

        </div>

          
      </div>

      <div className="divider divider-horizontal divider-primary"></div>

        {/* right side with recording */}
        <div className="grid h-auto w-full  card bg-base-300 rounded-box place-items-center pb-4">
          <div className="mt-9">
            
          </div>

          <br />

          <Stream />

          <br />

          <br />
          <BasicButton text='Start' color='primary' size='wide'/>
          <BasicButton text='Stop' color='secondary' size='wide'/>
        </div>
        
      </div>

    </>
  )
}

export default RecordingBlock