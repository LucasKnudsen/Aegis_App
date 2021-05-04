import React, { useState } from 'react'

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { motion, AnimatePresence } from 'framer-motion'

const VideoModal = ({ text, video }) => {
  const [open, setOpen] = useState(false)

  const body = (
    <AnimatePresence>
      <Button style={styles.closeButton} onClick={() => setOpen(false)}>
        Close
      </Button>
      <Paper style={styles.modalContainer} component={motion.div}>
        <video autoplay controls style={{width: '100%'}}>
          <source src={video} type='video/mp4'/>
        </video>
      </Paper>
    </AnimatePresence>
  )

  return (
    <>
      <Button style={styles.modalButton} onClick={() => setOpen(true)}>
        {text}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        {body}
      </Modal>
    </>
  )
}

export default VideoModal

const styles = {
  modalButton: {
    backgroundColor: '#4e4acb',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    width: '40%',
    height: '100%',
    margin: '10px 10px',
    border: '2px solid #4e4acb',
    boxShadow: 'inset 0 0 10px #202031'
  },
  modalContainer: {
    position: 'relative',
    margin: 'auto',
    top: '45%',
    transform: 'translateY(-55%)'
  },
  closeButton: {
    position: 'relative',
    backgroundColor: '#4e4acb',
    border: '2px solid #4e4acb',
    color: 'white',
    fontWeight: 'bold',
    boxShadow: 'inset 0 0 10px #202031',
    borderRadius: 10,
    top: '30vw',
    left: '50%',
    transform: 'translateX(-50%)',
  }
}