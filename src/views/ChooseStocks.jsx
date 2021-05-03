/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { globals } from '../styles/globals'
import { buttonVariants, containerSlideVaiants } from '../styles/animations'
import BackButton from '../shared/BackButton'
import { stockList } from '../assets/stockList'
import { motion } from 'framer-motion'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import HeaderNote from '../shared/HeaderNote'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CustomButton from '../shared/CustomButton'

const ChooseStocks = () => {
  const [stocks, setStocks] = useState()
  const [risk, setRisk] = useState()

  const handleChange = (event, newValue) => {
    newValue[0] ? setStocks(newValue) : setStocks(null)
  }

  return (
    <motion.div id='dashboard' style={{ ...globals.container, justifyContent: 'flex-start' }}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <BackButton />
      <HeaderNote text='Step 1 / 3' />
      <div style={styles.searchField}>
        <Autocomplete
          style={{ color: 'black' }}
          multiple
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
              variant="filled"
              label="Choose stocks"
              placeholder="GameStop..."
              style={{ color: 'white' }}
            />
          )}
        />
      </div>

      <p style={{marginBottom: 25}}>Choose your risk level:</p>

      <div>
        <ToggleButtonGroup exclusive size='large'
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
      </div>

      <div style={{ height: 100}}>
          {risk ? stocks ? (
            <motion.div variants={buttonVariants}>
              <CustomButton text='Next' link={{pathname: '/funds', state: {stocks, risk} }} />
            </motion.div>
          ) : <></> : <></>}
      </div>

    </motion.div>
  )
}

export default ChooseStocks

const styles = {
  riskButtons: {
    color: 'white',
    border: '2px solid #4e4acb',
    margin: '0 10px 25px 10px',
    borderRadius: 5
  },
  searchField: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 25,
    maxHeight: 150,
    overflow: 'scroll'
  }
}
