import React from 'react'

function Selector () {

  const [ selectedOption, setSelectedOption] = React.useState('2');

  return (
    <form>
      <fieldset>
        <label>
          Select a number of names: <br />
        </label>
        
        <select
          className='select select-primary w-full max-w-xs'
          value={selectedOption}
          onChange={event => {
            setSelectedOption(event.target.value)
          }}
        >
          <option value='1'>
            1
          </option>
          <option value='2'>
            2
          </option>
          <option value='3'>
            3
          </option>
        </select>
      </fieldset>
      
      <p>
        Selected value:
        <br />
        {selectedOption}
      </p>
    </form>
  )
}

export default Selector;