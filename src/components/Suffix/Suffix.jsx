import React from 'react'

function Suffix ({onSuffChange}) {

  return (
    <form>
      <fieldset>
        <label>
          Select a suffix: <br />
        </label>
        
        <select
          className='select select-primary w-full max-w-xs'
          onChange={event => {
            onSuffChange(event.target.value)
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
      
    </form>
  )
}

export default Suffix;