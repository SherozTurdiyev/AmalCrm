import React from 'react'
import LessonCard from '../../components/LessonCard/LessonCard'
import MChart from '../../components/MoneyChart/MChart'
import GeneralStat from '../../components/Statistics'
import StudentUnPay from '../../components/StudentUnPay/UnPay'
import { useApi } from '../../hooks/useApi'
import View_btn from '../../components/View_btn/View_btn'
import { MONTHS, weekend } from '../../services/constants'

export default function index() {
  const { data, isLoading } = useApi("unPayStudent", '/manager/unpaid-students-list')

  const today = new Date()

  console.log(today.getMonth());

  return (
    <div className='mt-8 grid grid-cols-10 gap-x-3'>
      <div className='col-span-7'>
        <GeneralStat />
        <div className='bg-white mt-8 p-8 pb-0 rounded-2xl'>
          <MChart />
        </div>
        <div className='bg-white mt-8 p-8 pb-0 rounded-2xl'>
          <StudentUnPay />
        </div>
      </div>
      <div className='col-span-3'>
        <div>
          <div className='w-full bg-white py-4 px-4 mb-4 rounded-2xl '>
            <p className='font-bold text-[#303972] text-2xl'>Dars jadvali</p>
            <p className='font-medium text-[14px] text-[#A098AE]'>{weekend[today.getDay() - 1].day}, {today.getDate()} -  {MONTHS[today.getMonth() - 1].month} , {today.getFullYear()}-yil</p>
          </div>
          <LessonCard color="red" group="FrontEnd 001" teacher="Turdiev Sheroz" date="mart 20, 2023" time="18:00" />
          <View_btn />
        </div>
      </div>
    </div>

  )
}
