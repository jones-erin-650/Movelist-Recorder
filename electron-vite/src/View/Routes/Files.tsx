import FileInput from "../Components/Files/FileInput"

const Files = () => {
  return (
    <>
      


      <div className="flex flex-col w-full lg:flex-row">

        {/* left side with file handling */}
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-left p-4">
          
          <FileInput 
            label='Choose your input txt file:'
          />
          
        </div> 

        <div className="divider lg:divider-horizontal"></div>

         {/*right side with console  */}
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"></div>
      </div>
    </>



  )
}

export default Files