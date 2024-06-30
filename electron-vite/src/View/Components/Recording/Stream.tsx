
function getSources(event) {
  event.preventDefault()
  //@ts-ignore
	window.api.getDisplays()
}	

const Stream = () => {
  return (
    <div className="flex flex-col justify-center">
    <button className="select select-primary w-full max-w-xs mb-5 pt-2" onClick={getSources}>Get displays</button>
      <button className="bg-red-500 w-12" onClick={getSources}></button>
      <video id="stream" controls className=""></video>
    </div>
    )
}

export default Stream