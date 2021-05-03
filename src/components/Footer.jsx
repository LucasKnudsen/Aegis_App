import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import {footerVariants} from '../styles/animations'
import IconButton from '@material-ui/core/IconButton';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { motion } from 'framer-motion';

const Footer = ({ location }) => {

  if (location.pathname === "/") return null;
  return (
    <motion.div style={styles.footerContainer} variants={footerVariants}
      initial='initial' animate='animate'
    >
      <Link style={styles.iconContainer} to='/dashboard'>
        <IconButton style={styles.iconButton}>
          <ShowChartIcon style={styles.icon} />
        </IconButton>
      </Link>
      <Link style={styles.iconContainer} to='/about'>
        <IconButton style={styles.iconButton}>
          <InfoOutlinedIcon style={styles.icon} />
        </IconButton>
      </Link>
      <Link style={styles.iconContainer}>
        <IconButton style={styles.iconButton}>
          <LiveHelpOutlinedIcon style={styles.icon} />
        </IconButton>
      </Link>
      <Link style={styles.iconContainer}>
        <IconButton style={styles.iconButton}>
          <PersonOutlineOutlinedIcon style={styles.icon} />
        </IconButton>
      </Link>
    </motion.div>
  )
}

export default withRouter(Footer)
const styles = {
  footerContainer: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '15vh',
    width: '100%',
    backgroundColor: '#4e4acb',
    zIndex: 2,
  },
  icon: {
    height: 40,
    width: 40,
  },
  iconContainer: {
    border: '2px solid white',
    borderRadius: '25%',
    boxShadow: '5px 7px 5px'
  },
  iconButton: {
    display: 'flex',
  }
}