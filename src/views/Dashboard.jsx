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

        <CustomButton text='Protect stocks you already own' link='/choose-stocks' margin={'25px 50px'} backgroundColor='#4e4acb' />
     
 
        <CustomButton text='Protect stocks we recommend for you' link='/dashboard' margin={'25px 50px'} backgroundColor='#4e4acb'/>
 
    </motion.div>
  )
}

export default Dashboard
