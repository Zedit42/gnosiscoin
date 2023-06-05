import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomPieChart = ({ data }) => {
  const COLORS = ['#2dd4bf', '#14b8a6', '#0d9488', '#a3e635', '#84cc16', '#65a30d'];
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div className="custom-tooltip  text-karla text-[#133629] bg-[#3E6957]/30 backdrop-blur-[8px] rounded-lg px-2">
          <p className=' '>{data.name}</p>
          <p className=' text-center '>{data.value}%</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart width={1200} height={500}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={120}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={5}
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

CustomPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CustomPieChart;
