import React from 'react'
import './Teacher_lesson.css'
import Img from '../../assets/img_for_student.png'

export default function Teacher_Lesson(props) {
  console.log(props.item);
  return (
    <div className=' text-white'>
        <div style={{background: props?.bg || '#4D44B5'}} className='Lesson_table_card'>
          <p className='text-white'>{props?.item?.start_date || 0}</p>
          <h3>{props?.group}</h3>
          <p className='text-white'>O’quvchilar soni : {props?.item?.students_count || 0}</p>
          <p className='p-0 my-1 fs-5 text-white'>Kurs Davomiyligi: <span className='font-bold'>6 oy</span></p>
          <div className='table_persent_card'>
            <div style={{width: props?.persent+ "%"}} className='table_persent'></div>
          </div>
            <div className='float-end'>{props?.persent}70 %</div>
          <div className='d-flex add_mentor'>
            <p className='pt-1 text-white'>Yordamchi O’qituvchi</p>
            <img className='mentor_img' src={props?.img} alt="mentor" />
          </div>
        </div>
    </div>
  )
}
