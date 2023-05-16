import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Joriy_hafta: 4000, otkan_hafta: 2400, amt: 2400 },
  { name: 'Feb', Joriy_hafta: 3000, otkan_hafta: 1398, amt: 2210 },
  { name: 'Mar', Joriy_hafta: 2000, otkan_hafta: 9800, amt: 2290 },
  { name: 'Apr', Joriy_hafta: 2780, otkan_hafta: 3908, amt: 2000 },
  { name: 'May', Joriy_hafta: 1890, otkan_hafta: 4800, amt: 2181 },
  { name: 'Jun', Joriy_hafta: 2390, otkan_hafta: 3800, amt: 2500 },
  { name: 'Jul', Joriy_hafta: 3490, otkan_hafta: 4300, amt: 2100 },
  { name: 'Aug', Joriy_hafta: 3490, otkan_hafta: 4300, amt: 2100 },
  { name: 'Sep', Joriy_hafta: 3490, otkan_hafta: 4300, amt: 2100 },
  { name: 'Oct', Joriy_hafta: 3490, otkan_hafta: 4300, amt: 2100 },
  { name: 'Nov', Joriy_hafta: 3490, otkan_hafta: 4300, amt: 2100 },
  { name: 'Dec', Joriy_hafta: 3490, otkan_hafta: 4300, amt: 2100 },
];

function MChart() {
  return (
    <div>
      <h3>O’quv markazi  statistikasi</h3>
      <LineChart width={800} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Joriy_hafta" stroke="#FB7D5B" />
      <Line type="monotone" dataKey="otkan_hafta" stroke="#FCC43E" />
    </LineChart>
    </div>
  );
}

export default MChart;
