import React from 'react'
import { useApi } from '../../hooks/useApi'
import TeacherCard from '../../components/TeacherCard/TeachCard'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import PageLoader from '../../components/shared/PageLoader/PageLoader'
import Filter from '../../components/Filter/Filter'

export default function index() {
  const naivgate = useNavigate()
  const { data, isLoading } = useApi("teacher-list", "/teacher/teacher-list")
  const teacherList = data?.data?.results || []

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className='flex flex-col'>
      <div className='my-4'>
        <Filter
          nameFilter={true}
          directionFilter={true}
          actionBtn={
            <Link to={'/addteach'} ><button className='bg-indigo-500 text-white py-2 px-5 rounded-3xl' >Yangi o'qituvchi </button></Link>
          }
        />
      </div>
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
