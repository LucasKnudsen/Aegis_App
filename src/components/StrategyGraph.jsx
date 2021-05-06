import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// import {graphData} from '../assets/graphData'

const StrategyGraph = ({ data }) => {
  const graphData = [
    { year: '2005', Gain: 100 },
    { year: '2006', Gain: 124 },
    { year: '2007', Gain: 160 },
    { year: '2008', Gain: 210 },
    { year: '2009', Gain: 220 },
    { year: '2010', Gain: 265 },
    { year: '2011', Gain: 245 },
    { year: '2012', Gain: 275 },
    { year: '2013', Gain: 290 },
    { year: '2014', Gain: 250 },
    { year: '2015', Gain: 310 },
    { year: '2016', Gain: 340 },
    { year: '2017', Gain: 355 },
    { year: '2018', Gain: 310 },
    { year: '2019', Gain: 365 },
    { year: '2020', Gain: 520 },
    { year: '2021', Gain: 540 },
  ]

  return (
    <div style={styles.graphContainer}>
       <div style={styles.stratContainer}>
          <p style={{ fontWeight: 'bold', marginBottom: 5 }}>Stock: {data.stock ? data.stock.name : 'GameStop'}</p>
          <p>a. Sell 3 put. Equity A</p>
          <p>b. Expire date xxxx</p>
          <p>c. Strike price</p>
        </div>
      <AreaChart
        width={380}
        height={250}
        data={graphData}
        margin={{top: 10, right: 30}}
      >
         <CartesianGrid strokeDasharray="3" />
        <defs>
          <linearGradient id="gain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#4e4acb" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#4e4acb" stopOpacity={0} />
          </linearGradient>

        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Gain" stroke="#4e4acb" fill="url(#gain)" />
      </AreaChart>
    </div>


  )
}

export default StrategyGraph

const styles = {
  graphContainer: {
    marginTop: 80,
    padding: 5,
    backgroundColor: 'rgba(45, 40, 61)',
    borderRadius: 10,
  },
  stratContainer: {
    // position: 'absolute',
    padding: 15,
    fontSize: 15,
    textAlign: 'center'
  },
}