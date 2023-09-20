import React from 'react'

function Honorific ({onDataChange}) {

  return (
    <form>
      <fieldset>
        <label>
          Select an honorific: <br />
        </label>
        
        <select
          className='select select-primary w-full max-w-xs'
          onChange={event => {
            onDataChange(event.target.value)
          }}
        >
          <option value="Their royal highness">
            Their royal highness
          </option>
          <option value="Doctor">
            Doctor
          </option>
          <option value="Professor">
            Professor
          </option>
          <option value="Mx.">
            Mx.
          </option>
          <option value="Sir">
            Sir
          </option>
          <option value="Madame">
            Madame
          </option>
          <option value="The Illustrious">
            The Illustrious
          </option>
          <option value="The Right Honorable">
            The Right Honorable
          </option>
          <option value="Their Majesty">
            Their Majesty
          </option>
          <option value="Duke">
            Duke
          </option>
          <option value="Dutchess">
            Dutchess
          </option>
        </select>
      </fieldset>
      
    </form>
  )
}

export default Honorific;