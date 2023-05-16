import React from 'react'
import './About_Student.css'
import {FaPencilAlt} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import {MdLockOutline, MdFamilyRestroom} from 'react-icons/md'
import {IoMdCall} from 'react-icons/io'
import {CiUser} from 'react-icons/ci'

export default function About_Student() {
  return (
    <div>
      <div className='student_bg mt-5'>
        <div className="circle2"></div>
        <div className="circle1"></div>
      </div>
      <div className='student_card'>
        <div className='flex relative'>
        <div className="student_img">
          <CiUser size={120} color={"gray"}/>
        </div>
          <div className='student_name_card'>
          <p className='student_name'>Nabila Azizov</p>
          <p className="role">O'quvchi</p>
          </div>
        </div>
        <div className='dot_card'>
          <BsThreeDots style={{cursor:"pointer"}}/>
        </div>
        <div className='info_student_card'>
          <div>
          <p className='text-xl'>Login</p>
          <div className='flex my-2'>
            <div className='icon_card'><FaPencilAlt/></div>
            <p className='user_pass'>Nabila001</p>
          </div>
          </div>

          <div>
          <p className='text-xl'>Parol</p>
          <div className='flex my-2'>
            <div className='icon_card'><MdLockOutline size={20}/></div>
            <p className='user_pass'>Nabila1122</p>
          </div>
          </div>

          <div>
          <p className='text-xl'>Tel raqami</p>
          <div className='flex my-2'>
            <div className='icon_card'><IoMdCall size={20}/></div>
            <p className='user_pass'>+998 (91) 123 45 67</p>
          </div>
          </div>

          <div>
          <p className='text-xl'>Oila a’zolari tel raqmi</p>
          <div className='flex my-2'>
            <div className='icon_card'><MdFamilyRestroom size={20}/></div>
            <p className='user_pass'>+998 (91) 123 45 67</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
