"use client"
import React from 'react'
import CustomPieChart from '../components/CustomPieChart'
const test = () => {
  const data = [
    { name: 'Development', value: 1.5 },
    { name: 'Flexible Funds', value: 0.8 },
    { name: "Refill Camelot's Liquidity Pool", value: 1 },
    { name: 'Lucky Drop Rewards', value: 3 },
    { name: 'Dividends to AIDOGE Stakers', value: 0.7 },
    { name: 'Burn', value: 1 },
  ];
  return (
    <div className=''>
      <CustomPieChart data={data}/>
    </div>
  )
}

export default test