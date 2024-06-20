import FileInput from "../Components/Files/FileInput"

const Files = () => {
  return (
    <>
        <div className="flex w-full align-content: center">
          
          {/* left side with file handling */}
          <div className="h-auto w-1/2 card bg-base-300 rounded-box place-items-left p-4">

            <FileInput 
                label='Choose your input txt file:'
              />
              
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-auto w-1/2 card bg-base-300 rounded-box place-items-center"></div>
        </div>



    </>



  )
}

export default Files