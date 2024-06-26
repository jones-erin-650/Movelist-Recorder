import { useSoftware } from '../../../../Model/Input-Handling'
import BasicDropdown from './BasicDropdown'

const SoftwareDropdown = () => {
  const software = useSoftware((state) => state.software)
  console.log('software: ' + software)

  const setSoftware = useSoftware((state) => state.setSoftware)


  function softwareSelect(inputSoftware: string) {
    setSoftware(inputSoftware)
    console.log('software in state: ' + JSON.stringify(software))
  }

  return (
    <BasicDropdown 
      characters={[
        'Eddieinput'
      ]}
      text={'Software'}
      onChangeHandler={softwareSelect}
    />
  )
}

export default SoftwareDropdown