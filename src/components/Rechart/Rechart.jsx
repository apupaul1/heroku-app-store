import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Rechart = ({ ratings }) => {
  const data = ratings.map(rating => ({
    name: rating.name,
    value: rating.count,
  })).reverse();

  return (
    <div className=" overflow-x-auto">
      <h1 className='text-2xl font-bold mb-4'>Ratings</h1>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" barSize={30} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Rechart;
