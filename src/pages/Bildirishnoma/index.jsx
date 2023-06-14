import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import moment from 'moment'
import { weekend } from '../../services/constants'
import QueryHook from '../../hooks/QueryHook/QueryHook'

export default function index() {
  const now = new Date()
  const { MergeQueryParams, QueryParams } = QueryHook()
  useEffect(() => {
    MergeQueryParams({ year: now.getFullYear(), month: now.getMonth() + 1 })
  }, []);

  const Single_day = ({ day }) => {
    return (
      <div
        onClick={() => { MergeQueryParams({ day: day}) }}
        className={
          `w-full h-[130px] border-[#A098AE] border-2 rounded-lg 
          ${(day == new Date().getDate() - 1) && "bg-slate-900"} hover:bg-slate-500
          ${ QueryParams.day == day && "bg-slate-500"} 
          `}
      >
        <p className='px-3 pt-1 text-mainColor font-bold text-2xl'

        >
          {day + 1}
        </p>
      </div>
    )
  }
  const currentdays = Array.from(Array(moment(`${QueryParams.year || now.getFullYear()}-${QueryParams.month || now.getMonth()}`).daysInMonth()).keys()) || []

  const today = new Date(QueryParams.year || now.getFullYear(), QueryParams.month || now.getMonth() + 1, now.getDay() + 1).getDay() + 1


  return (
    <div
      className='w-full min-h-[250px] bg-white mt-10 rounded-xl '
    >
      <div className='flex flex-row justify-between items-center pt-4 w-[90%] mx-auto'>
        <p
          className=' text-mainColor font-bold text-4xl'
        >
          Kalendar
        </p>
        <Filter
          yearFilter={true}
          monthFilter={true}
          defaultMonth={now.getMonth() + 1}
          defaultYear={now.getFullYear()}
          actionBtn={
            <Link to={'/addteach'} >
              <button
                className='bg-indigo-500 text-white py-2 px-5 rounded-3xl'
              >
                Bildirishnoma
              </button>
            </Link>}
        />
      </div>
      <div className='w-[90%] mx-auto pt-4'>
        {/* <div className='grid grid-cols-7'>
          {
            weekend.map((item) => (
              <div className='col-span-1 text-center font-semibold text-base text-secondary'>{item.day}</div>
            ))
          }
        </div> */}
        <div className='grid grid-cols-7 gap-2'>
          {
            currentdays.map((item) => (
              <div className='col-span-1' key={item}>
                <Single_day day={item} />
              </div>))
          }

        </div>
      </div>
    </div>
  )
}
