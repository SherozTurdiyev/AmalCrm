import { ImUserTie } from 'react-icons/im'
import { RiUser2Fill } from 'react-icons/ri'
import { BsCalendarDate } from 'react-icons/bs'
import { BiCubeAlt } from 'react-icons/bi'
import { Skeleton } from 'antd'
import './statistic.css'
import { useApi } from '../../hooks/useApi'

const stats = [
  { id: 1, color: '#4D44B5', img: <RiUser2Fill />, name: "O'quvchi", index: "students_count" },
  { id: 2, color: '#FB7D5B', img: <ImUserTie />, name: "O'qituvchi", index: "teachers_count" },
  { id: 3, color: '#FCC43E', img: <BsCalendarDate />, name: 'Bildirishnoma', index: "events_count" },
  { id: 4, color: '#303972', img: <BiCubeAlt />, name: 'Guruhlar', index: "groups_count" }
]

export default function Example() {
  const { data } = useApi("", "/teacher/get-counts-statistics")


  const countStatistics = stats.map((item) => {
    return { ...item, value: data?.data[item.index] }
  })

  return (
    <div className="bg-white rounded-2xl">
      <div className="mx-auto shadow-lg rounded-2xl py-10">
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-y-16 text-center lg:grid-cols-4">
          {countStatistics.map((stat) => (
            <div key={stat.id} className="mx-auto flex gap-y-3 items-center">
              <div className='text-3xl p-3 text-white rounded-full mx-4' style={{ backgroundColor: `${stat.color}` }}>{stat.img}</div>
              <div>
                <div className=" text-gray-600">{stat.name}</div>
                <div className="order-first">
                  {
                    !!stat.value ||  stat.value == 0 ?
                      <p className='text-4xl font-bold tracking-tight text-gray-800 text-start'>{stat.value} ta</p>
                      :
                      <Skeleton.Button active={true} size={'large'}  block={"block"} style />
                  }
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
