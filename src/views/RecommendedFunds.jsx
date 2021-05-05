import React, { useState } from 'react'
import HeaderNote from '../shared/HeaderNote'
import { globals } from '../styles/globals'
import { containerSlideVaiants, buttonVariants } from '../styles/animations'
import CustomButton from '../shared/CustomButton'

import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper'


const RecommendedFunds = () => {
  const { state } = useLocation()
  const [amount, setAmount] = useState()

  return (
    <motion.div id='dashboard' style={globals.container}
      variants={containerSlideVaiants} initial='initial' animate='animate' exit='exit'
    >
      <HeaderNote text={state ? 'Step 2 / 3' : 'Step 1 / 3'} />
      <p style={{ ...globals.text, marginBottom: 50 }}>How much do you wish to invest for?</p>

      <Paper style={{ padding: 15, width: '80%', borderRadius: 10 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput

            type='number'
            onChange={(e) => setAmount(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </Paper>

      <div style={{ height: 100, marginTop: 75 }}>
        {amount && (
          <motion.div variants={buttonVariants}>
            <CustomButton text='Next' link={{ pathname: '/hedge', state: { amount, stock: state ? state.stocks : undefined } }} />
          </motion.div>
        )}
      </div>

    </motion.div>

  )
}

export default RecommendedFunds
