
function getSources(event) {
  event.preventDefault()
  //@ts-ignore
	const menu = window.api.getDisplays() //IPC cant clone the Menu object
  console.log(menu)
}	

async function selectSource(source) {
  const streamHTML = document.querySelector('video')

  const constraints = {
    audio: false,
    video: true
  };
  
  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  //@ts-ignore
  streamHTML.srcObject = stream
  streamHTML?.play();
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