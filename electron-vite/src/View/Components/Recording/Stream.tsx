
function getSources() {
	
}	

const Stream = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-red-500 w-12" onClick={getSources}></button>
      <video id="stream" controls className=""></video>
    </div>
    )
}

export default Stream