import React from 'react'
import { globals } from '../styles/globals'
import CustomButton from '../shared/CustomButton'
import HeaderNote from '../shared/HeaderNote'
import { useLocation } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { motion } from 'framer-motion'
import { containerSlideVaiants } from '../styles/animations'

const stocks = [
  'Lemonade', 'Enphase', 'Teladoc Health', 'Tesla', 'Nvidia' 
]

const RecommendedStocks = () => {
  const { state } = useLocation()
  return (
    <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <HeaderNote text='Step 2 / 3' />
      <p style={{ ...globals.text }}>Choose one of our recommended stocks</p>

      <Paper style={styles.tableContainer}>
        <TableContainer>
          <Table>
            <TableBody>
              {stocks.map(stock => (
                <TableRow key={stock}>
                  <TableCell style={{fontWeight: 'bold'}} >{stock}</TableCell>
                  <TableCell>
                    <CustomButton text='Choose' fontSize={12} backgroundColor='#4e4acb' link={{pathname: '/hedge', state: {amount: state.amount, stocks: {name: stock}}}} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </motion.div>
  )
}

export default RecommendedStocks

const styles = {
  tableContainer: {
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    maxHeight: 250,
    overflowY: 'scroll'
  }
}