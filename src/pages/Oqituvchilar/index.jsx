import React from 'react'
import { useApi } from '../../hooks/useApi'
import TeacherCard from '../../components/TeacherCard/TeachCard'
import { Link } from 'react-router-dom'

export default function index() {
  const { data } = useApi("teacher-list", "/teacher/teacher-list")
  const teacherList = data?.data?.results || []
  return (
    <div className='grid grid-cols-4 gap-3'>
      {
        (teacherList.length > 0) ?
          teacherList.map((item, index) => <div className='col-span-1'><TeacherCard info={item} key={item.id} /></div>)
          :
          <h1>Data Not found</h1>
      }
    </div>
  )
}
