import React, {useState} from 'react'
import { globals } from '../styles/globals'
import CustomButton from '../shared/CustomButton'
import HeaderNote from '../shared/HeaderNote'
import { buttonVariants, containerSlideVaiants } from '../styles/animations'
import BackButton from '../shared/BackButton'

import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField'

const Funds = () => {
  const { state } = useLocation()
  const [portfolio, setPortfolio] = useState([])

  const handleChange = (event) => {
    setPortfolio({
      ...portfolio,
      [event.target.name]: +event.target.value
    })
  }

  const showNext = () => {
    return state && Object.values(portfolio).length === state.stocks.length
  }

  return (
    <motion.div id='dashboard' style={{...globals.container, justifyContent: 'flex-start'}}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <BackButton />
      <HeaderNote text='Step 2 / 3' />

      <TableContainer style={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell style={{ fontWeight: 'bold' }}>Stock</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>Amount ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {state && state.stocks.map(stock => (
              <TableRow key={stock.name} style={styles.tableRow}>
                <TableCell>{stock.name}:</TableCell>
                <TableCell align="right">
                  <TextField required type='number' name={stock.name} onChange={handleChange} />
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ height: 100, marginTop: 75}}>
          { showNext() && (
            <motion.div variants={buttonVariants}>
              <CustomButton text='Next' />
            </motion.div>
          ) }
      </div>

    </motion.div>
  )
}

export default Funds

const styles = {
  tableContainer: {
    backgroundColor: 'white',
    width: 250,
    borderRadius: 5,
    maxHeight: 300,
    overflow: 'scroll',
    marginTop: 100
  },
  tableRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto'
  }
}