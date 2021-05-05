import React from 'react'
import { globals } from '../styles/globals'
import HeaderNote from '../shared/HeaderNote'
import { containerSlideVaiants, } from '../styles/animations'
import video1 from '../assets/video1.mp4'
import Paper from '@material-ui/core/Paper';
import VideoModal from '../shared/VideoModal'
import video2 from '../assets/video2.mp4'

import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Protection = () => {
  const { state } = useLocation()

  return (
    <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <HeaderNote text='Step 3 / 3' />
      <p style={{ ...globals.title, marginBottom: 25 }}>Your protection strategy</p>

      <div>
      <Paper style={styles.stratContainer}>
        <p style={{fontWeight: 'bold', marginBottom: 5}}>Stock: {state.stock ? state.stock.name : 'GameStop'}</p>
        <p>a. Sell 3 put. Equity A</p>
        <p>b. Expire date xxxx</p>
        <p>c. Strike price</p>
      </Paper>
      </div>
      <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
        <VideoModal text='Not sure how to buy & sell options?' video={video1} />
        <VideoModal text='Aegis stock protection in 100 seconds' video={video2} />
      </div>
    </motion.div>
  )
}

export default Protection

const styles = {
  stratContainer: {
    // position: 'absolute',
    padding: 15,
    fontSize: 20,
    background: 'rgba(255,255,255, 0.5)'
  },

}
// https://www.youtube.com/watch?v=FZvpjAMi-us&ab_channel=AndersHasleNielsen