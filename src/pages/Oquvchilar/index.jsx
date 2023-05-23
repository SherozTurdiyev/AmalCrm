import React from 'react'
import { useApi } from '../../hooks/useApi'
import Student_info from '../../components/Student_info/student_info'

export default function index() {
  const { data, isLoading, isError, error } = useApi("student", "/student/student-list/")
  const studentList = data?.data?.results || []
  console.log(studentList);
  return (
    <div>
      <h1>Filter</h1>
      <Student_info dataSource={studentList} isLoading={isLoading} />
    </div>
  )
}
