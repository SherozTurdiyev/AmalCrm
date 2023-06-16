import React from 'react'
import './Teacher_lesson.css'
import Img from '../../assets/img_for_student.png'
import { Skeleton } from 'antd';

export default function Teacher_Lesson({ groups = {} }) {
  const date = new Date(groups.created_at);
  
  return (
    <div className=' text-white'>
      <div style={{ background: groups?.bg || '#4D44B5' }} className='Lesson_table_card'>
        <p className='text-white'> Guruh: {groups.name} </p>
        <div>
          <p className='text-white'> Boshlangan vaqti: {`${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()} ` || 0} </p>
        </div>
        <h3>{groups?.group}</h3>
        <p className='text-white'>O’quvchilar soni : {groups.capacity || 0}</p>
        <div className='d-flex add_mentor'>
          <p className='pt-1 text-white'>Yordamchi O’qituvchi: </p>
          {
            groups?.img ?
              <img className='mentor_img' src={groups?.img} alt="mentor" />
              :
              <Skeleton.Avatar
                size={'large'}
                active={true} />
          }
        </div>
      </div>
    </div>
  )
}
