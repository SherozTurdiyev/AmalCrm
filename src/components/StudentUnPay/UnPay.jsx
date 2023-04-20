import React from 'react';
import { FaRegUser } from 'react-icons/fa'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
const Index = () => {
  const mass = [
    { son: 1 },
    { son: 2 },
    { son: 3 },
    { son: 4 },
  ]

  return (
    <div className='container mx-auto'>
      <h3 className='mb-3'>To'lan magan talaba </h3>
      <table className='table table-borderless'>
        <thead>
          <tr>
            <th>N#</th>
            <th>FISH</th>
            <th>ID</th>
            <th>Guruh</th>
            <th>Summa</th>
            <th>Hodisa</th>
          </tr>
        </thead>
        <tbody>
          {
            mass.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='font-bold'>{item.son}</td>
                  <td className='flex justify-start items-center '>
                    <FaRegUser className='fs-1 mx-2  text-white bg-orange-500 rounded-full p-2' />
                    <p className='font-bold'>Turdiyev Sheroz</p>
                  </td>
                  <td className='font-bold'>123456789</td>
                  <td className='flex justify-start items-center p-0 m-0'>
                    <FaRegUser className='fs-1 mx-2  text-white bg-orange-500 rounded-full p-2' />
                    <p className='font-bold mt-3 '>Fr-001</p>
                  </td>
                  <td className='font-bold'>697 000 Sum</td>
                  <td >
                    <div className='flex justify-between items-center '>
                      <AiOutlinePrinter className='text-slate-300 fs-1 ' />
                      <BsThreeDots className='fs-4' />
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Index;
