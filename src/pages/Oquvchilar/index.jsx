import React from 'react'
import { useApi } from '../../hooks/useApi'
import Student_info from '../../components/Student_info/student_info'
import Filter from '../../components/Filter/Filter'
import { Link } from 'react-router-dom'

export default function index() {
  const { data, isLoading, isError, error } = useApi("student", "/student/student-list/")
  const studentList = data?.data?.results || []
  return (
    <div>
      <div>
        <Filter
          nameFilter={true}
          directionFilter={true}
          groupFilter={true}
          actionBtn={
            <Link to={'/addstudent'} ><button className='bg-indigo-500 text-white py-2 px-5 rounded-3xl' >Yangi o'quvchi </button></Link>
          }
        />
      </div>
      <Student_info dataSource={studentList} isLoading={isLoading} />
    </div>
  )
}
