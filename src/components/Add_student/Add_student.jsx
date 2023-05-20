import React from 'react'
import './Add_student.css'
export default function Add_student() {
  return (
    <div>
      <div className='student_card'>
        <div className='student_card_top'>
          <h4>Shaxsiy Malumotlar</h4>
        </div>
        <div className="row container py-3">
          <div className='input_1 col-6'>
            <h5>Ismi *</h5>
            <input className='form-control' type="text" placeholder='Ismi' />
          </div>
          <div className='input_1 col-6'>
            <h5>Familiya *</h5>
            <input className='form-control' type="text" placeholder='Familiya' />
          </div>

          <div className='input_1 col-6'>
            <h5>Email </h5>
            <input className='form-control' type="email" placeholder='Email' />
          </div>
          <div className='input_1 col-6'>
            <h5>Tel raqami *</h5>
            <input className='form-control' type="number" placeholder='Tel raqami' />
          </div>
          
          <div className='input_1 col-6 mt-4'>
            <h5>Tug’ilgan sana * </h5>
            <input className='form-control' type="text" placeholder='Tug’ilgan sana *' />
          </div>
          <div className='input_1 col-6 mt-4'>
            <h5>Manzil</h5>
            <input className='form-control' type="text" placeholder='Manzil' />
          </div>

          <div className='input_1 col-6'>
            <h5>User parol * </h5>
            <input className='form-control' type="password" placeholder='User parol *' />
          </div>
          <div className='input_1 col-6'>
            <h5>Parolni Takrorlang*</h5>
            <input className='form-control' type="password" placeholder='Parolni Takrorlang*' />
          </div>

          <div className='input_1 col-6'>
            <h5>Ota Onasining ismi </h5>
            <input className='form-control' type="text" placeholder='Ota Onasining ismi' />
          </div>
          <div className='input_1 col-6'>
            <h5>Ota Onasining tel raqami</h5>
            <input className='form-control' type="number" placeholder='Ota Onasining tel raqami' />
          </div>

        </div>
      </div>
    </div>
  )
}
