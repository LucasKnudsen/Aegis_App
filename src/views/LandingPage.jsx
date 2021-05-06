import React, {useEffect} from 'react'
import { globals } from '../styles/globals'
import logo from '../assets/Aegis.png'
import CustomButton from '../shared/CustomButton'
import {landingSlideVariants} from '../styles/animations'
import { motion } from 'framer-motion'

const profile = {
  name: 'Anders Hassle Nielsen',
  avatar: 'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/31395670_10216730599757832_5862413703709720576_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=FKlnHHf4W04AX94P2uV&_nc_ht=scontent-cph2-1.xx&oh=563f2f0d96291722091472ebe09b4d94&oe=60B94D19',
  stocks: [
    {name: 'GameStop', strike: 3000, itm: 'Yes', date: '03/05/2021'},
  ]
}

const LandingPage = () => {

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [])

  return (
    <motion.div id='landing-page' style={{ ...globals.container, justifyContent: 'space-evenly', height: '100vh', maxHeight: '100vh' }}
      variants={landingSlideVariants} initial='initial' animate='animate' exit='exit' >

      <div style={{ textAlign: 'center' }}
      >
        <img src={logo} style={styles.logo} alt="logo"/>
        <p style={globals.text}>Trading made easy</p>
      </div>
      <div style={styles.buttonsContainer}>
        <CustomButton text='Explore' link='/dashboard' />
        <CustomButton text='Register/Sign up' link='#' />
      </div>

    </motion.div>
  )
}

export default LandingPage

const styles = {
  logo: {
    height: 'auto',
    width: '90%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}


