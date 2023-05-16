import React from 'react'
import './Teacher_lesson.css'
import Img from '../../assets/img_for_student.png'

export default function Teacher_Lesson(props) {
  return (
    <div className='col-4 my-2'>
        <div style={{background: props?.bg}} className='Lesson_table_card'>
          <p>{props?.date}</p>
          <h3>{props?.group}</h3>
          <p>O’quvchilar soni : {props?.children}</p>
          <p className='p-0 my-1 fs-5'>Kurs Davomiyligi</p>
          <div className='table_persent_card'>
            <div style={{width: props?.persent+ "%"}} className='table_persent'></div>
          </div>
            <div className='float-end'>{props?.persent}%</div>
          <div className='d-flex add_mentor'>
            <p className='pt-1'>Yordamchi O’qituvchi</p>
            <img className='mentor_img' src={props?.img} alt="mentor" />
          </div>
        </div>
    </div>
  )
}
