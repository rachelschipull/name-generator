import React from 'react'
import names from './names.js'

function Selector () {

  const [selectedNumber, setSelectedNumber] = React.useState('');


  return (
    <form>
      <fieldset>
        <label>
          Select a number of names: <br />
        </label>
        
        <select
          className='select select-primary w-full max-w-xs'
          value={selectedNumber}
          onChange={event => {
            setSelectedNumber(event.target.value)
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

function shuffle(){

  //names array, shuffle it, then slice [selecteValue-1], join, toString, export to Form
  
  //(selectedValue - 1), shuffle names array, take the 

  const fyshuffle = (names) => {
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = array[i];
      array[i] = array[rand];
      array[rand] = oldElement;
    }
    names.slice((selectedNumber - 1))
  } 
}



export default Selector;