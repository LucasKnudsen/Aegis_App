import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { footerVariants } from '../styles/animations'
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
        <Link style={styles.link} to='/dashboard'>
          <IconButton style={styles.iconButton}>
            <ShowChartIcon style={styles.icon} />
          </IconButton>
          <p>Home</p>
        </Link>
      </div>
      <div style={styles.wrapper}>
        <Link style={styles.link} to='/about'>
          <IconButton style={styles.iconButton}>
            <InfoOutlinedIcon style={styles.icon} />
          </IconButton>
          <p>About</p>
        </Link>
      </div>
      <div style={styles.wrapper}>
        <Link style={styles.link} to='/faq'>
          <IconButton style={styles.iconButton}>
            <LiveHelpOutlinedIcon style={styles.icon} />
          </IconButton>
          <p>FAQ</p>
        </Link>
      </div>
      <div style={styles.wrapper}>
        <Link style={styles.link} to='/profile'>
          <IconButton style={styles.iconButton}>
            <PersonOutlineOutlinedIcon style={styles.icon} />
          </IconButton>
          <p>Profile</p>
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
    height: '10vh',
    width: '100%',
    backgroundColor: '#09393d',
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
  iconButton: {
    padding: 0
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center'
  }
}