import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const CustomButton = ({ text, link }) => {
  return (
    <Link to={link} style={styles.buttonContainer}>
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
 
    borderRadius: 25,
    zIndex: 500
  },
  buttonContainer: {
    textDecoration: 'none',
    border: '2px solid #4e4acb',
    padding: '5px 15px',
    borderRadius: 25,
    margin: 10,
    textAlign: 'center',
    color: 'white'
  }
}
