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
      <div className='poppins flex items-center justify-between mb-3'>
        <p className='poppins font-bold text-2xl text-mainColor mb-4'>O’quv markazi  statistikasi</p>
        <div className='flex'>
          <div className='mr-5'>
            <p className='flex items-center text-secondary font-normal text-sm m-0 pb-1'>
              <div className='w-3 h-3 rounded-full border-4 border-lightGold mr-2'></div>
              Joriy hafta</p>
            <p className='font-bold text-lg text-mainColor m-0 pl-[21px]'>1.245</p>
          </div>
          <div >
            <p className='flex items-center text-secondary font-normal text-sm m-0 pb-1'>
              <div className='w-3 h-3 rounded-full border-4 border-orange mr-2'></div>
              o’tkan hafta</p>
            <p className='font-bold text-lg text-mainColor m-0 pl-[22px]'>1.356</p>
          </div>
        </div>
      </div>
      <div>
        <LineChart width={700} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="Joriy_hafta" stroke="#FB7D5B" />
          <Line type="monotone" dataKey="otkan_hafta" stroke="#FCC43E" />
        </LineChart>
      </div>
    </div>
  );
}

export default MChart;
