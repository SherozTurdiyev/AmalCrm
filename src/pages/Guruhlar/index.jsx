import React from 'react'
import { Link } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import PageLoader from '../../components/shared/PageLoader/PageLoader';
import Teacher_Lesson from '../../components/Teacher_lesson/Teacher_Lesson';
import { useApi } from '../../hooks/useApi'

export default function index() {
  const { data, isLoading } = useApi('groups', '/reception/room-list/')
  const groupsList = data?.data?.results || []

  if (isLoading) { return <PageLoader /> }

  return (
    <div>
      <Filter
        nameFilter={true}
        directionFilter={true}
        groupFilter={true}
        actionBtn={
          <Link 
            to={'/addgroups'} >
            <button
              className='bg-indigo-500 text-white py-2 px-5 rounded-3xl'
            >
              Yangi o'quvchi
            </button>
          </Link>
        }
      />
      <div className='bg-white py-3 px-5 rounded-2xl'>
        <div className='grid grid-cols-4'>
          {
            groupsList.map((item, index) => (
              <div key={index}>
                <Teacher_Lesson groups={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
