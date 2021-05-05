import React from 'react'
import CustomButton from './CustomButton'

// Not used, but kept.

const BackButton = () => {
  return (
    <div style={styles.backButton}>
    <CustomButton text='Back' link='#' back={true} />
    </div>
  )
}

export default BackButton

const styles = {
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  }
}