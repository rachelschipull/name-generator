import React, {useState} from 'react'
import Honorific from '../Honorific'
import Suffix from '../Suffix'
import Selector from '../Selector'
import Header from '../Header'

function Form () {
  const [data, setData] = useState('')
  const handleHonorChange = (newHonor) => {
        setData(newHonor)
  }

  const [suffData, setSuffData] = useState('')
  const handleSuffChange = (newSuff) => {
    setSuffData(newSuff)
  }

  const [selectedNumber, setSelectedNumber] = useState('');
  const handleSelectChange = (newNumber) => {
    setSelectedNumber(newNumber)
  }

  return (
    <div className="w-screen h-screen">
        <Header />
          <div className="flex justify-center justify-between px-40 w-100 m-5">
            <Honorific onDataChange={handleHonorChange}/>
            <Selector onSelectChange={handleSelectChange}/>
            <Suffix onSuffChange={handleSuffChange}/>
          </div>
          <div className="flex justify-center mb-5">
            <p>{data} {selectedNumber} {suffData}</p>
          </div>
    </div>
  )
}

export default Form;