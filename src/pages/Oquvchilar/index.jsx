import React from 'react'
import { useApi } from '../../hooks/useApi'

export default function index() {
  const {data , isLoading , isError , error} = useApi("/student/student-list/")
  const studentList  = data?.data?.results || []
  console.log(studentList);
  return (
    <div>O'quvchilar</div>
  )
}
