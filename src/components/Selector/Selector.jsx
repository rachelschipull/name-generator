import React from 'react'

function Selector ({onSelectChange}) {

  return (
    <form>
      <fieldset>
        <label>
          Select a number of names: <br />
        </label>
        
        <select
          className='select select-primary w-full max-w-xs'
          onChange={event => {
            onSelectChange(event.target.value)
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
      
    </form>
  )
}

export default Selector;