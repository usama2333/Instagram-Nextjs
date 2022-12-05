import React from 'react'
import Cards from '../components/Cards'
import Navigation from '../components/Navigation'
import Stories from '../components/Stories'
import sty from '../styles/mainhome.module.css'

const home = () => {
  return (
    <div className={sty.main}>
      <div className={sty.navigation}>
        <Navigation/>
      </div>
    <div className={sty.mid}>
      <Stories/>
      <Cards/>
    </div>

    </div>
  )
}

export default home