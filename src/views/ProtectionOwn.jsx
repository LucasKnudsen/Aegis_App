import React, { useState } from 'react'
import { globals } from '../styles/globals'
import HeaderNote from '../shared/HeaderNote'
import { containerSlideVaiants } from '../styles/animations'
import BackButton from '../shared/BackButton'

import { motion } from 'framer-motion'
import Paper from '@material-ui/core/Paper';

const ProtectionOwn = () => {
  return (
    <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <BackButton />
      <HeaderNote text='Step 3 / 3' />
      <p style={{ ...globals.title, marginBottom: 50 }}>Your protection/option strategy</p>
      <Paper style={styles.stratContainer}>
        <p>a. Sell 3 put. Equity A</p>
        <p>b. Expire date xxxx</p>
        <p>c. Strike price</p>
      </Paper>

    </motion.div>
  )
}

export default ProtectionOwn

const styles = {
  stratContainer: {
    padding: 25,
    fontSize: 20
  }
}