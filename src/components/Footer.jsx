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
    <div style={styles.wrapper}>
      <p>Home</p>
      <Link style={styles.iconContainer} to='/dashboard'>
        <IconButton style={styles.iconButton}>
          <ShowChartIcon style={styles.icon} />
        </IconButton>
      </Link>
    </div>
      <div style={styles.wrapper}>
      <p>About</p>
      <Link style={styles.iconContainer} to='/about'>
        <IconButton style={styles.iconButton}>
          <InfoOutlinedIcon style={styles.icon} />
        </IconButton>
      </Link>
    </div>
      <div style={styles.wrapper}>
      <p>FAQ</p>
      <Link style={styles.iconContainer} to='/faq'>
        <IconButton style={styles.iconButton}>
          <LiveHelpOutlinedIcon style={styles.icon} />
        </IconButton>
      </Link>
    </div>
      <div style={styles.wrapper}>
      <p>Profile</p>
      <Link style={styles.iconContainer} to='/profile'>
        <IconButton style={styles.iconButton}>
          <PersonOutlineOutlinedIcon style={styles.icon} />
        </IconButton>
      </Link>
    </div>
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
    backgroundColor: '#115293',
    zIndex: 2,
    boxShadow: '0px -5px 10px black',
    color: 'white'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 35,
    width: 35,
  },
  iconContainer: {
    border: '2px solid white',
    borderRadius: '25%',
    boxShadow: '5px 7px 5px',
    marginTop: 3,
  },
  iconButton: {
    display: 'flex',
  }
}