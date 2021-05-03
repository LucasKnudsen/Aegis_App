import React from 'react'
import { globals } from '../styles/globals'
import { containerSlideVaiants } from '../styles/animations'
import { motion } from 'framer-motion'


const Profile = () => {
  return (
    <motion.div id='dashboard' style={globals.container}
    variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      PROFILE PAGE
  </motion.div>
  )
}

export default Profile
