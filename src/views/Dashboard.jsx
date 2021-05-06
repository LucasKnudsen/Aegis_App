import React from 'react'
import { globals } from '../styles/globals'
import CustomButton from '../shared/CustomButton'

import { motion } from 'framer-motion'
import { containerSlideVaiants } from '../styles/animations'

const Dashboard = () => {
  return (
    <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >

      <p style={{ ...globals.title, marginBottom: 50 }}>Welcome to Aegis</p>
      <CustomButton text='Protect a stock you are interested in' link={{ pathname: '/funds', state: {flow: 'own'}}} margin={'25px 50px'} backgroundColor='#115293' />
      <CustomButton text='Protect a stock we recommend for you' link={{ pathname: '/funds', state: {flow: 'recommended'} }} margin={'25px 50px'} backgroundColor='#115293' />

    </motion.div>
  )
}

export default Dashboard
