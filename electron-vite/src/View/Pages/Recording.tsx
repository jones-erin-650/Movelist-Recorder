import TopBlock from "../Components/Sections/TopBlock"
import Stream from "../Components/Recording/Stream"
import BasicDropdown from "../Components/Inputs/Dropdowns/BasicDropdown"

const { desktopCapturer } = require('electron');

async function getDisplays() {
  const displays = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });
}

const Recording = () => {
  return (
    <>
      <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
      <TopBlock />
      <Stream />
      {/* <BasicDropdown 
        text="Select display to be captured"
        characters={}
      /> */}
    </>
  )
}

export default Recording