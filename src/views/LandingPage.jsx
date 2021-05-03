import React from 'react'
import { globals } from '../styles/globals'
import logo from '../assets/Aegis.png'
import CustomButton from '../shared/CustomButton'
import { containerSlideVariants } from '../styles/animations'

const LandingPage = () => {
  return (
    <div style={{ ...globals.container, justifyContent: 'space-evenly' }} variants={containerSlideVariants} exit='exit'>
      <div style={{textAlign: 'center'}}>
        <img src={logo} style={styles.logo} />
        <p style={globals.text}>Trading made easy</p>
      </div>
      <div style={styles.buttonsContainer}>
        <CustomButton text='Explore' link='/dashboard' />
        <CustomButton text='Register/Sign up' />
      </div>

    </div>
  )
}

export default LandingPage

const styles = {
  logo: {
    height: 250,
    width: 250,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}
