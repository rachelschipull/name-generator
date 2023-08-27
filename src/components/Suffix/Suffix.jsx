import React from 'react'

function Suffix () {

  const [ selectedOption, setSelectedOption] = React.useState('');

  return (
    <form>
      <fieldset>
        <label>
          Select a suffix: <br />
        </label>
        
        <select
          value={selectedOption}
          onChange={event => {
            setSelectedOption(event.target.value)
          }}
        >
          <option value="I">
            I
          </option>
          <option value="II">
            II
          </option>
          <option value="III">
            III
          </option>
          <option value="IV">
            IV
          </option>
          <option value="MD">
            MD
          </option>
          <option value="Esq.">
            Esq.
          </option>
          <option value="Sr.">
            Sr.
          </option>
          <option value="Jr.">
            Jr.
          </option>
          <option value="PhD">
            PhD
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

export default Suffix;