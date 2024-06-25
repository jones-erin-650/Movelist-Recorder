import BasicButton from "../BasicButton"
import BasicDropdown from "../Inputs/Dropdowns/BasicDropdown"
import FileInput from "../Inputs/FileInput"
import Toggle from "../Inputs/Toggle"
import Stream from '../Recording/Stream'

const RecordingBlock = () => {
  const dummyArray = ['hi', 'hihi']
  const dummyFunction = () => {}
  return (
    <>
      <div className="flex flex-col w-full h-auto border-opacity-50 py-2 place-items-center bg-base-300 rounded-box">
        <div className="grid grid-cols-5 h-auto card  place-items-center pb-4 pr-2">
          {/* just padding for the grid alignment */}
          <div></div>

          <FileInput  label='Output folder' />
          <div className="mt-9">
            <BasicDropdown 
              characters={dummyArray}
              onChangeHandler={dummyFunction}
              text="Streams"
            />
          </div>
          <div className="mt-9">
            <Toggle text='Use movelist for names?' />
          </div>
          {/* just padding for the grid alignment */}
          <div></div>

        </div>

        <br />

        <Stream />

        <br />

        <div className="">
          <BasicButton text='Start' color='primary' size='wide'/>
          <br />
          <BasicButton text='Stop' color='secondary' size='wide'/>
        </div>
      </div>

    </>
  )
}

export default RecordingBlock