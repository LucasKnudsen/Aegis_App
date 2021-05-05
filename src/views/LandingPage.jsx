import React from 'react'
import { globals } from '../styles/globals'
import logo from '../assets/Aegis.png'
import CustomButton from '../shared/CustomButton'
import {landingSlideVariants} from '../styles/animations'
import { motion } from 'framer-motion'



const LandingPage = () => {
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
    height: 300,
    width: 300,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}


