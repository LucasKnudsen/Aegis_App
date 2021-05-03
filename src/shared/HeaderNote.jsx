import React from 'react'

const HeaderNote = ({text}) => {
  return (
    <p style={styles.headerNote}>
      {text}
    </p>
  )
}

export default HeaderNote

const styles = {
  headerNote: {
    position: 'absolute',
    top: 18,
    right: 25,
    fontWeight: 'bold'
  }
}