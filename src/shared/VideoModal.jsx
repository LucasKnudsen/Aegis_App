import React, { useState } from 'react'

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { motion, AnimatePresence } from 'framer-motion'

const VideoModal = ({ text, video }) => {
  const [open, setOpen] = useState(false)

  const body = (
    <>
      <Button style={styles.closeButton} onClick={() => setOpen(false)} component={motion.button}
        initial={{ y: '-100%', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }} exit={{ y: '100%' }}
      >
        Close
      </Button>

      <Paper style={styles.modalContainer} component={motion.div}
        initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }} exit={{ y: '100%' }}>
        <video autoplay controls style={{ width: '100%' }}>
          <source src={video} type='video/mp4' />
        </video>
      </Paper>
    </>
  )

  return (
    <>
      <Button style={styles.modalButton} onClick={() => setOpen(true)}>
        {text}
      </Button>
      <AnimatePresence exitBeforeEnter>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          onExitComplete={() => setOpen(false)}
        >
          {body}
        </Modal>
      </AnimatePresence>
    </>
  )
}

export default VideoModal

const styles = {
  modalButton: {
    backgroundColor: '#09393d',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    width: '40%',
    height: '100%',
    margin: '0px 10px',
    border: '2px solid #29b380',
    boxShadow: 'inset 0 0 10px #202031'
  },
  modalContainer: {
    position: 'relative',
    margin: 'auto',
    top: '30%',
  },
  closeButton: {
    position: 'relative',
    backgroundColor: '#09393d',
    border: '2px solid #29b380',
    color: 'white',
    fontWeight: 'bold',
    boxShadow: 'inset 0 0 10px #202031',
    borderRadius: 10,
    top: '35vw',
    left: '45%',
    transform: 'translateX(-40%)',
  }
}