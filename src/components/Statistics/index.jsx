import { ImUserTie } from 'react-icons/im'
import { RiUser2Fill } from 'react-icons/ri'
import { BsCalendarDate } from 'react-icons/bs'
import { BiCubeAlt } from 'react-icons/bi'
import './statistic.css'

const stats = [
  { id: 1, color: '#4D44B5', img: <RiUser2Fill />, name: "O'quvchi", value: '93 ta' },
  { id: 2, color: '#FB7D5B', img: <ImUserTie />, name: "O'qituvchi", value: '75 ta' },
  { id: 3, color: '#FCC43E', img: <BsCalendarDate />, name: 'Bildirishnoma', value: '40 ta' },
  { id: 4, color: '#303972', img: <BiCubeAlt />, name: 'Guruhlar', value: '10 ta' }
]

export default function Example() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="mx-auto shadow-lg rounded-2xl py-10 mx-10">
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex gap-y-3 items-center">
              <div className='text-3xl p-3 text-white rounded-full mx-4' style={{backgroundColor : `${stat.color}`}}>{stat.img}</div>
              <div>
                <div className=" text-gray-600">{stat.name}</div>
                <div className="order-first text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
