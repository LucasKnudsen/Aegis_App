import React from 'react'
import { globals } from '../styles/globals'
import HeaderNote from '../shared/HeaderNote'
import { containerSlideVaiants, } from '../styles/animations'
import video1 from '../assets/video1.mp4'
import VideoModal from '../shared/VideoModal'
import video2 from '../assets/video2.mp4'

import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import StrategyGraph from '../components/StrategyGraph'

const Protection = () => {
  const { state } = useLocation()

  return (
    <motion.div id='dashboard' style={{...globals.container, justifyContent: 'flex-start'}}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <HeaderNote text='Step 3 / 3' />
      {/* <p style={{ ...globals.title, marginBottom: 25 }}>Your protection strategy</p> */}

      <div>
        <StrategyGraph data={state} />
      </div>
      <div style={styles.videoButtons}>
        <VideoModal text='Not sure how to buy & sell options?' video={video1} />
        <VideoModal text='Aegis stock protection in 100 seconds' video={video2} />
      </div>
    </motion.div>
  )
}

export default Protection

const styles = {
  videoButtons: {
     marginTop: 20, 
     display: 'flex', 
     justifyContent: 'center' 
  }

}
// https://www.youtube.com/watch?v=FZvpjAMi-us&ab_channel=AndersHasleNielsen