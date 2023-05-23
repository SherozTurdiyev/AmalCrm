import { Skeleton } from 'antd';
import React from 'react';
import { AiFillMessage, AiFillPhone } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const TeachCard = ({ info }) => {

  return (
    <div className='bg-slate-200 w-full px-6 py-6 rounded-lg text-center relative hover:shadow-md'>
      {
        info.avatar ?
          <img className='rounded-full w-[144px] m-auto mb-5' src={info.avatar} alt="user" />
          :
          <Skeleton.Image className='rounded-full w-[144px] m-auto mb-3' style={{ borderRadius: "50%" }} />

      }
      <Link style={{ textDecoration: "none" }} to={`/teacher/${info.id}`}>
        <h5 className='font-bold text-mainColor'>{info.last_name + info.first_name}</h5>
        <p className='text-slate-400'>O'qituvchi</p>
        <div className='flex  justify-evenly'>
          <a href={`tel:${info.phone}`}> <AiFillPhone className='bg-cyan-700 text-white text-4xl rounded-full p-2' /></a>
          <AiFillMessage className='bg-cyan-700 text-white text-4xl rounded-full p-2' />
        </div>
      </Link>

      <BsThreeDots className='fs-4 absolute top-1 right-5 hover:cursor-pointer' />
    </div>
    
  )
}

export default TeachCard;
