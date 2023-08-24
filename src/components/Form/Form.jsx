import React from 'react'

function Form () {

  const [ selectedOption, setSelectedOption] = React.useState('');

  return (
    <form>
      <fieldset>
        <label>
          Select an honorific: <br />
        </label>
        
        <select
          value={selectedOption}
          onChange={event => {
            setSelectedOption(event.target.value)
          }}
        >
          <option value="Their royal highness">
            Their royal highness
          </option>
          <option value="Dr.">
            Dr.
          </option>
          <option value="Professor">
            Professor
          </option>
          <option value="Mx">
            Mx
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

export default Form;