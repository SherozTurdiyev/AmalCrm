import React from 'react';
import { AiFillMessage, AiFillPhone } from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'

const TeachCard = () => {
  const mass = [
    {
      img: 'https://media.licdn.com/dms/image/C4D03AQGkTTcdZyOuCA/profile-displayphoto-shrink_800_800/0/1660039125670?e=2147483647&v=beta&t=gZCPGqZTvM_1VzQi4d_dusmsimdPgwU0mSJw7O0hrIw',
      name: 'Nurillokh Ubaydullayev',
      role: 'web/mobile developer'
    },
    // {
    //   img: 'https://media.licdn.com/dms/image/C4E03AQGVxZLL2U27Lg/profile-displayphoto-shrink_800_800/0/1639589594776?e=2147483647&v=beta&t=KA_sl3r_yFw23_n2FRXVEncjyXdXWNjqxrl9lJqCvcs',
    //   name: 'Asadbek Shorahimov',
    //   role: 'web developer'
    // },

  ]

  return (
    <div>
      {
        mass.map((item, index) => {
          return (
            <div key={index}>
              <div className='bg-slate-200 w-72 px-6 py-6 rounded-lg text-center relative '>
                <img className='rounded-full w-36 m-auto mb-5' src={item.img} alt="user" />
                <h5 className='font-bold'>{item.name}</h5>
                <p className='text-slate-400'>{item.role}</p>
                <div className='flex  justify-evenly'>
                  <AiFillPhone className='bg-cyan-700 text-white text-4xl rounded-full p-2' />
                  <AiFillMessage className='bg-cyan-700 text-white text-4xl rounded-full p-2' />
                </div>
                <BsThreeDots className='fs-4 absolute top-1 right-5' />
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default TeachCard;
