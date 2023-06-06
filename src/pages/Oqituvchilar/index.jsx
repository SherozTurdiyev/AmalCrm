import React from 'react'
import { useApi } from '../../hooks/useApi'
import TeacherCard from '../../components/TeacherCard/TeachCard'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function index() {
  const naivgate = useNavigate()
  const { data } = useApi("teacher-list", "/teacher/teacher-list")
  const teacherList = data?.data?.results || []
  return (
    <div>
       <Button className='float-end bg-indigo-500 text-white fw-2' onClick={() => naivgate('/addteach')} shape="round" >
          O’qituvchi
        </Button>
      <div className='grid grid-cols-4 gap-3'>
        {
          (teacherList.length > 0) ?
            teacherList.map((item, index) => <div className='col-span-1'><TeacherCard info={item} key={item.id} /></div>)
            :
            <h1>Data Not found</h1>
        }
      </div>
    </div>
  )
}
