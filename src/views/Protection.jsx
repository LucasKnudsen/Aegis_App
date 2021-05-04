import React from 'react'
import { globals } from '../styles/globals'
import HeaderNote from '../shared/HeaderNote'
import { containerSlideVaiants, } from '../styles/animations'
import BackButton from '../shared/BackButton'
import video1 from '../assets/video1.mp4'

import { motion } from 'framer-motion'
import Paper from '@material-ui/core/Paper';
import VideoModal from '../shared/VideoModal'

const Protection = () => {

  return (
    <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <BackButton />
      <HeaderNote text='Step 3 / 3' />
      <p style={{ ...globals.title, marginBottom: 25 }}>Your protection/option strategy</p>

      <Paper style={styles.stratContainer}>
        <p>a. Sell 3 put. Equity A</p>
        <p>b. Expire date xxxx</p>
        <p>c. Strike price</p>
      </Paper>
      <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
        <VideoModal text='Not sure how to buy & sell options?' video={video1} />
        <VideoModal text='Aegis stock protection in 100 seconds' />
      </div>
    </motion.div>
  )
}

export default Protection

const styles = {
  stratContainer: {
    padding: 25,
    fontSize: 20
  },

}
// https://www.youtube.com/watch?v=FZvpjAMi-us&ab_channel=AndersHasleNielsen