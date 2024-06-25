//i don't think this will work because electron doesn't allow getDisplayMedia. might have to fix the require() thing and use desktopCapturer

const startRecording = () => {
  console.log("recording");
  navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      height: 700,
      width: 1200
    }
  })
  .then((stream) => {
    const recorder = new MediaRecorder(stream);
    recorder.start();
    const buffer = [];
    recorder.addEventListener('dataavailable', (event) => {
      // @ts-ignore
      buffer.push(event.data) 
    })
    recorder.addEventListener('stop', () => {
      const blob = new Blob(buffer, {
        type: 'video/mp4'
      })

      const video = document.getElementById('stream');
      // @ts-ignore
      video.href = URL.createObjectURL(blob);
    })
  })
} 

const Stream = () => {
  return (
    <div className="flex justify-center">
      <button onClick={startRecording}></button>
      <video id="stream" controls className=""></video>
    </div>
    )
}

export default Stream