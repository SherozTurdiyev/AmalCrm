import { DatePicker, Input, Modal } from 'antd'
import React, { useRef, useState } from 'react'
import BackToBtn from '../../../components/shared/BackToBtn'
import { useMutationApi } from '../../../hooks/useApiMutation'

import './Add_student.css'

export default function Add_student() {
  const mutation = useMutationApi("/student/student-create/", "POST")
  const first_name = useRef(null);
  const last_name = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const [birth_date, setBirth_date] = useState(null)
  const address = useRef(null)
  const password = useRef(null)
  const password2 = useRef(null)
  const parent_name = useRef(null)
  const parent_phone = useRef(null)
  const balance = useRef(null)

  const createStudent = () => {
    console.log()
    mutation.mutate(
      {
        "first_name": first_name.current.input.value,
        "last_name": last_name.current.input.value,
        "email": email.current.input.value + "@gmail.com",
        "phone":"+998" + phone.current.input.value,
        "birth_date": birth_date,
        "address": address.current.input.value,
        "password": password.current.input.value,
        "password2": password2.current.input.value,
        "parent_name": parent_name.current.input.value,
        "parent_phone":"+998" + parent_phone.current.input.value,
        "balance": "0",
      }
    )
  }

  if (mutation?.data?.response?.status == 400) {
    let errorKeys = []
    for (const key in mutation?.data?.response?.data) {
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
            <p className='font-semibold m-0'>
              {mutation?.data?.response?.data[item]}
            </p>
          )
        })}
      </div>
    })
  }

  return (
    <div>
      <BackToBtn />
      <div className='student_card my-4'>
        <div className='student_card_top'>
          <h4>Shaxsiy Malumotlar</h4>
        </div>
        <div className="row container py-3">
          <div className='input_1 col-6'>
            <h5>Ismi *</h5>
            <Input size='large' placeholder='Ism' type='text' ref={first_name} />
          </div>
          <div className='input_1 col-6'>
            <h5>Familiya *</h5>
            <Input ref={last_name} size="large" type="text" placeholder='Familiya' />
          </div>

          <div className='input_1 col-6'>
            <h5>Email </h5>
            <Input ref={email} addonAfter="@gmail.com" defaultValue="example" size='large' />
            {/* <input ref={email} className='form-control' type="email" placeholder='Email' /> */}
          </div>
          <div className='input_1 col-6'>
            <h5>Tel raqami *</h5>
            <Input addonBefore={"+998"} ref={phone} placeholder='Tel raqami' size='large' />
          </div>
          <div className='input_1 col-6'>
            <h5>Tug’ilgan sana * </h5>
            <DatePicker onChange={(option, date) => { setBirth_date(date) }} className='w-full' size='large' format={'YYYY-MM-DD'} />
          </div>
          <div className='input_1 col-6'>
            <h5>Manzil</h5>
            <Input ref={address} size="large" type="text" placeholder='Manzil' />
          </div>
          <div className='input_1 col-6'>
            <h5>User parol *</h5>
            <Input size='large' ref={password} type="password" placeholder='User parol *' />
          </div>
          <div className='input_1 col-6'>
            <h5>Parolni Takrorlang*</h5>
            <Input size='large' ref={password2} type="password" placeholder='Parolni Takrorlang*' />
          </div>

          <div className='input_1 col-6'>
            <h5>Ota Onasining ismi </h5>
            <Input ref={parent_name} size="large" type="text" placeholder='Ota Onasining ismi' />
          </div>
          <div className='input_1 col-6'>
            <h5>Ota Onasining tel raqami</h5>
            <Input addonBefore={"+998"} ref={parent_phone} placeholder='Tel raqami' size='large' />
          </div>

        </div>
      </div>
      <div className='flex justify-end my-3'>
        <button className="border-2 border-indigo-500  text-indigo-500 py-2 mr-4 px-5 rounded-3xl active:border-indigo-300 active:text-indigo-300">Bekor qilish</button>
        <button className='bg-indigo-500 text-white py-2 px-5 rounded-3xl active:bg-indigo-300' onClick={createStudent}>Saqlash</button>
      </div>
    </div>
  )
}
