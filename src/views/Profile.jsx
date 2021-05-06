import React, { useState, useEffect } from 'react'
import { globals } from '../styles/globals'
import { containerSlideVaiants } from '../styles/animations'
import { motion } from 'framer-motion'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Profile = () => {
  const [profile, setProfile] = useState()
  const labels = ['Stock', 'Strike Price', 'ITM?', 'Start date']

  const fetchProfile = () => {
    let response = JSON.parse(localStorage.getItem('profile'))
    setProfile(response)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <motion.div id='dashboard' style={{...globals.container, justifyContent: 'flex-start'}}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      {profile ? (
        <>
          <div style={styles.infoContainer}>
            <div >
              <img src={profile.avatar} alt='avatar' style={styles.logo} />
            </div>
            <div style={styles.infoSection}>
              <p style={{fontWeight: 'bold', marginBottom: 5}}>{profile.name}</p>
              <p>Member since: 01/01/2021</p>
            </div>
          </div>

          <div style={styles.strategyList}>
            <p style={globals.title}>Active strategies</p>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                  {labels.map(label => (
                    <TableCell key={label} style={{color: 'white',  textAlign: 'center'}}>
                      {label}
                    </TableCell>
                  ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {profile.stocks.map((stock, i) => (
                    <TableRow key={i} >
                      {Object.values(stock).map((data, y) => (
                        <TableCell key={y} style={{color: 'white', textAlign: 'center'}}>{data}</TableCell>
                      ))}
                  
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <>
          You don't have a profile.
        </>
      )}

    </motion.div>
  )
}

export default Profile

const styles = {
  logo: {
    borderRadius: '50%',
    height: 150,
    width: 150,
    marginLeft: -10
  },
  infoContainer: {
    display: 'flex',
    marginTop: 50,
    width: '90%',
    height: 150,
    backgroundColor: '#072229',
    borderRadius: 10,
    borderTopLeftRadius: '25%',
    borderBottomLeftRadius: '25%'
  },
  infoSection: {
    padding: 25,
  },
  strategyList: {
    backgroundColor: '#072229',
    borderRadius: 10,
    width: '90%',
    height: 'auto',
    marginTop: 50,
    padding: 10,
    maxHeight: 250,
    overflowY: 'scroll'
  }
}