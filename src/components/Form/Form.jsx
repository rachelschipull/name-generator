import React from 'react'
import Honorific from '../Honorific'
import Suffix from '../Suffix'
import Selector from '../Selector'
import Header from '../Header'
import Footer from '../Footer'

function Form () {
  return (
    <div className="w-screen h-screen">
        <Header />
          <div className="flex justify-center justify-between px-40 w-100">
            <Honorific />
            <Selector />
            <Suffix />
          </div>
        <Footer />
    </div>
  )
}

export default Form;