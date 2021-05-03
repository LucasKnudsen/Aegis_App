import React from 'react'
import { globals } from '../styles/globals'
import { containerSlideVaiants } from '../styles/animations'
import { motion } from 'framer-motion'


const FAQ = () => {
  return (
    <motion.div id='dashboard' style={globals.container}
    variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      FAQ PAGE
  </motion.div>
  )
}

export default FAQ
