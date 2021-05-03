import React from 'react'
import { globals } from '../styles/globals'

import { motion } from 'framer-motion'
import { containerSlideVaiants } from '../styles/animations'

const Dashboard = () => {
  return (
      <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
      >
        HELLOOO
    </motion.div>
  )
}

export default Dashboard
