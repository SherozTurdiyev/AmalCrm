import { DatePicker, Input, Modal, Popover, Skeleton } from 'antd';
import React, { useRef, useState } from 'react';
import { AiFillMessage, AiFillPhone } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useMutationApi } from '../../hooks/useApiMutation'

const TeachCard = ({ info }) => {
  const [isPopoverActive, setPopoverActive] = useState(false);
  let birth_date = null
  const first_name = useRef(null);
  const last_name = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const password = useRef(null)

  const deleteMutation = useMutationApi(`/teacher/teacher-update/${info.id}`, "DELETE")
  const editMutation = useMutationApi(`/teacher/teacher-update/${info.id}`, "PUT")

  const teacherDeleteHandle = (user_id) => {
    setPopoverActive(false)
    Modal.confirm({
      title: "O'qituvchini o'chirmoqchimisiz?",
      okText: "O'chirish",
      cancelText: "Bekor qilish",
      okButtonProps: {
        style: {
          background: "#6366F1"
        }
      },
      content:
        <div>
          <p>{info.first_name + "ni o'qituvchilar safidan chiqarmoqchimisiz"}</p>

        </div>,
      onOk: () => {
        deleteMutation.mutate()
      }
    })

  }

  const teacherEditHandle = () => {
    setPopoverActive(false)
    Modal.confirm({
      title: "Ma'lumotlarni Tahrilash!",
      content: <div>
        <p>{info.first_name + "ni o'qituvchilar safidan tahrirlamoqchimisiz?"}</p>
        <form className='grid grid-cols-1 gap-1'>
          <Input ref={first_name} defaultValue={info.first_name} placeholder="Ism" />
          <Input ref={last_name} defaultValue={info.last_name} placeholder="Familya" />
          <DatePicker onChange={(option, date) => { birth_date = date}} className='w-full' size='large' format={'YYYY-MM-DD'} />
          <Input defaultValue={String(info.email).split("@")[0]} ref={email} addonAfter="@gmail.com" placeholder='example' size='large' />
          <Input defaultValue={String(info.phone).slice(4)} addonBefore={"+998"} ref={phone} placeholder='Tel raqami' size='large' />
        </form>
      </div>,
      okButtonProps: {
        style: {
          background: "#6366F1"
        }
      },
      onOk: () => {
        editMutation.mutate(
          {
            "first_name": first_name.current.input.value,
            "last_name": last_name.current.input.value,
            "email": email.current.input.value + "@gmail.com",
            "phone": "+998" + phone.current.input.value,
            "birth_date": birth_date
          }
        )
      }
    })
  }

  if (editMutation?.data?.response?.status == 400) {
    let errorKeys = []
    for (const key in editMutation?.data?.response?.data) {
      errorKeys.push(key)
    }
    console.log(errorKeys);
    Modal.error({
      title: "Xatolik Kuzatildi!",
      okButtonProps: {
        style: {
          backgroundColor: "blue"
        }
      },
      content: <div className='mt-3'>
        {errorKeys.map((item, i) => {
          return (
            <p className='font-medium m-0'>
              <span className='font-bold'>{item} : </span>
              {editMutation?.data?.response?.data[item]}
            </p>
          )
        })}
      </div>
    })
  }

  if(editMutation?.data?.status == 200 || deleteMutation?.data?.status == 204){window.location.reload()}


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
              onClick={teacherEditHandle}
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
        <h5 className='font-bold text-mainColor hover:text-red-500'>{info.last_name + " " +  info.first_name}</h5>
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
