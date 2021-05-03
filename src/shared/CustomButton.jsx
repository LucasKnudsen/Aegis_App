import React from 'react'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CustomButton = ({ text, link }) => {
  return (
    <Link to={link} style={styles.buttonContainer} component={motion.a}
      whileTap={{ backgroundColor: '#4e4acb', scale: 1.1 }}>
      <Button style={styles.button}

      >
        {text}
      </Button>
    </Link>
  )
}

export default CustomButton

const styles = {
  button: {
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: 25,

  },
  buttonContainer: {
    textDecoration: 'none',
    border: '2px solid #4e4acb',
    borderRadius: 25,
    margin: 10,
    textAlign: 'center',
    appearance: 'none',
    outline: 'none'
  }
}
