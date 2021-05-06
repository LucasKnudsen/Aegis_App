/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { globals } from '../styles/globals'
import { buttonVariants, containerSlideVaiants } from '../styles/animations'
import { stockList } from '../assets/stockList'
import { motion } from 'framer-motion'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import HeaderNote from '../shared/HeaderNote'
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CustomButton from '../shared/CustomButton'

const ChooseStocks = () => {
  const { state } = useLocation()
  const [stocks, setStocks] = useState()
  // const [risk, setRisk] = useState()

  const handleChange = (event, newValue) => {
    newValue ? setStocks(newValue) : setStocks(null)
  }

  return (
    <motion.div id='dashboard' style={{ ...globals.container}}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <HeaderNote text='Step 2 / 3' />
      <p style={{ ...globals.text }}>Choose a stock you want to protect</p>

      <Paper style={styles.searchField}>
        <Autocomplete
          fullWidth={true}
          onChange={handleChange}
          id="tags-outlined"
          options={stockList}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <>
              <span />
              <div style={{ color: 'black' }}>
                {option.name}
              </div>
            </>
          )}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Search for a stock"
              placeholder="GameStop..."
            />
          )}
        />
      </Paper>

      <div style={{ height: 100, marginTop: 75 }}>
        {stocks && (
          <motion.div variants={buttonVariants}>
            <CustomButton text='Next' link={{ pathname: '/hedge', state: { stocks, amount: state.amount } }} />
          </motion.div>
        )}
      </div>

      {/* <div>
        <ToggleButtonGroup exclusive size='middle'
          onChange={(event, newValue) => setRisk(newValue)}
        >
          <ToggleButton
            value='low'
            selected={risk === 'low'}
            style={{ ...styles.riskButtons, backgroundColor: risk === 'low' && '#4e4acb' }}
          >
            Low risk
            </ToggleButton>
          <ToggleButton
            value='middle'
            selected={risk === 'middle'}
            style={{ ...styles.riskButtons, backgroundColor: risk === 'middle' && '#4e4acb' }}
          >
            Medium risk
            </ToggleButton>
          <ToggleButton
            value='high'
            selected={risk === 'high'}
            style={{ ...styles.riskButtons, backgroundColor: risk === 'high' && '#4e4acb' }}
          >
            High risk
            </ToggleButton>
            
        </ToggleButtonGroup>
      </div> */}

    </motion.div>
  )
}

export default ChooseStocks

const styles = {
  riskButtons: {
    color: 'white',
    border: '2px solid #4e4acb',
    margin: '0 10px 30px 10px',
    borderRadius: 5
  },
  searchField: {
    width: '80%',
    padding: 20,
    marginTop: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: 150,
  }
}
