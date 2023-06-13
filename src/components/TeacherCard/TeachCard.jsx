import { Modal, Popover, Skeleton } from 'antd';
import React, { useState } from 'react';
import { AiFillMessage, AiFillPhone } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import {useMutationApi} from '../../hooks/useApiMutation'

const TeachCard = ({ info }) => {
  const [isPopoverActive, setPopoverActive] = useState(false)
  const deleteMutation = useMutationApi(`/teacher/teacher-update/${info.id}` , "DELETE")

  const teacherDeleteHandle = (user_id) => {
    setPopoverActive(false)
    Modal.confirm({
      title: "O'qituvchini o'chirmoqchimisiz?",
      okText: "O'chirish",
      cancelText:"Bekor qilish",
      okButtonProps:{
        style:{
          background:"#6366F1"
        }
      },
      content: <div> <p>{info.first_name + "ni o'qituvchilar safidan chiqarmoqchimisiz"}</p> </div>,
      onOk:()=>{
        deleteMutation.mutate()
      }
    })
    console.log(user_id);
  }


  return (
    <div className='bg-slate-200 w-full px-6 py-6 rounded-lg text-center relative hover:shadow-md'>
      <Popover
        open={isPopoverActive}
        placement="bottomRight"
        content={
          <div className='flex flex-col gap-1'>
            <button
              className='text-red-500 hover:bg-slate-200 font-bold px-2 py-1 rounded-md flex items-center gap-2'
              onClick={() => { teacherDeleteHandle(info.id) }}
            >
              <AiFillDelete /> O'chirish
            </button>
            <button
              className='text-green-500 hover:bg-slate-200 font-bold px-2 py-1 rounded-md flex items-center gap-2'
            >
              <AiFillEdit /> Tahrirlash
            </button>
          </div>
        }
        trigger="click"
      >
        <BsThreeDots
          className='fs-4 absolute top-1 right-5 hover:cursor-pointer'
          onClick={() => { setPopoverActive(true) }}
        />
      </Popover>


      {
        info.avatar ?
          <img className='rounded-full w-[144px] m-auto mb-5' src={info.avatar} alt="user" />
          :
          <Skeleton.Image className='rounded-full w-[144px] m-auto mb-3' style={{ borderRadius: "50%" }} />

      }
      <Link style={{ textDecoration: "none" }} to={`/teacher/${info.id}`}>
        <h5 className='font-bold text-mainColor hover:text-red-500'>{info.last_name + info.first_name}</h5>
      </Link>
      <p className='text-slate-400'>O'qituvchi</p>
      <div className='flex  justify-evenly'>
        <a href={`tel:${info.phone}`}> <AiFillPhone className='bg-cyan-700 text-white text-4xl rounded-full p-2' /></a>
        <AiFillMessage className='bg-cyan-700 text-white text-4xl rounded-full p-2' />
      </div>



    </div>

  )
}

export default TeachCard;
