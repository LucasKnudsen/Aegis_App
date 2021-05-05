import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const CustomButton = ({ text, link, ...props }) => {
  const styles = {
    button: {
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 25,
      zIndex: 500,
      fontSize: 20,
    },
    buttonContainer: {
      textDecoration: 'none',
      border: '2px solid #4e4acb',
      padding: '5px 15px',
      borderRadius: 25,
      margin: props.margin ? props.margin : 10,
      backgroundColor: props.backgroundColor ? props.backgroundColor : 'none',
      textAlign: 'center',
      color: 'white',
      boxShadow: 'inset 0 0 10px #202031'
    }
  }

  return (
    <Link to={link} style={styles.buttonContainer}>
      <Button style={styles.button} >
        {text}
      </Button>
    </Link>
  )
}

export default CustomButton
