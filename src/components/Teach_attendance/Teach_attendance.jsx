import React from 'react'
import { Button, Popover } from 'antd';
import { useMemo, useState } from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi'
import './teach_att.css'

export default function Teach_attendance() {
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const mergedArrow = useMemo(() => {
    if (arrowAtCenter)
      return {
        pointAtCenter: true,
      };
    return showArrow;
  }, [showArrow, arrowAtCenter]);
  const [status, setStatus] = useState(true)

  const [students, setStudents] = useState([
    {
      name: 'Asadbek'
    },

    {
      name: 'Jasur'
    },

    {
      name: 'Elbek'
    },

    {
      name: 'Shamshod'
    },

    {
      name: 'Kimyo'
    },

    {
      name: 'Nargiza'
    },

    {
      name: 'Nilufar'
    },

    {
      name: 'Dilyor'
    },

    {
      name: 'Alixon'
    },

    {
      name: 'Nafosat'
    },

    {
      name: 'Nafosat'
    },

    {
      name: 'Nafosat'
    },

    {
      name: 'Nafosat'
    },

    {
      name: 'Nafosat'
    },

    {
      name: 'Nafosat'
    }
  ])

  const [columns, setColumns] = useState(
    [
      {
        title: 'F.I.SH',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '01.02.2023',
        dataIndex: 'address',
        key: '1',
        width: 120,
      },
      {
        title: '02.02.2023',
        dataIndex: 'address',
        key: '2',
        width: 120,
      },
      {
        title: '03.02.2023',
        dataIndex: 'address',
        key: '3',
        width: 120,
      },
      {
        title: '04.02.2023',
        dataIndex: 'address',
        key: '4',
        width: 120,
      },
      {
        title: '05.02.2023',
        dataIndex: 'address',
        key: '5',
        width: 120,
      },
      {
        title: '06.02.2023',
        dataIndex: 'address',
        key: '6',
        width: 120,
      }
    ]
  )

  const [days, setDays] = useState([])

  if (status) {
    for (let i = 0; i < students.length * 6; i++) {
      days.push({
        day: <Popover placement="left"
          content={
            <div className='d-flex buttons_click'>
              <p onClick={() => changeS(i)} className='m-0 me-1 py-2 S_button'>Keldi</p>
              <p onClick={() => changeY(i)} className='m-0 ms-1 py-2 Y_button'>Kelmadi</p>
            </div>
          }
          arrow={mergedArrow}>
          <Button className='hovered'></Button>
        </Popover>
      })
    }
    setStatus(false)
    setDays(days)
  }

  function changeS(index) {
    let current = [...days]
    current[index].day =
      <div className='buttons_click'>
        <p className='m-0 px-3 me-1 py-2 S_button S_button_hover'>Keldi <BiMessageSquareEdit onClick={() => changeS_little(index)} className='fs-6 hover_S' /></p>
      </div>
    setDays(current)
  }

  function changeY(index) {
    let current = [...days]
    current[index].day =
      <div className='buttons_click'>
        <p className='m-0 px-3 me-1 py-2 Y_button Y_button_hover'>Kelmadi <BiMessageSquareEdit onClick={() => changeY_little(index)} className='fs-6 hover_Y' /></p>
      </div>
    setDays(current)
  }

  function changeS_little(i) {
    let current = [...days]
    current[i].day = <Popover placement="left"
      content={
        <div className='d-flex buttons_click'>
          <p onClick={() => changeS(i)} className='m-0 px-3 me-1 py-2 S_button'>Keldi</p>
          <p onClick={() => changeY(i)} className='m-0 px-3 ms-1 py-2 Y_button'>Kelmadi</p>
        </div>
      }
      arrow={mergedArrow}>
      <Button className='hovered'></Button>
    </Popover>
    setDays(current)
  }

  function changeY_little(i) {
    let current = [...days]
    current[i].day = <Popover placement="left"
      content={
        <div className='d-flex buttons_click'>
          <p onClick={() => changeS(i)} className='m-0 px-3 me-1 py-2 S_button'>Keldi</p>
          <p onClick={() => changeY(i)} className='m-0 px-3 ms-1 py-2 Y_button'>Kelmadi</p>
        </div>
      }
      arrow={mergedArrow}>
      <Button className='hovered'></Button>
    </Popover>
    setDays(current)
  }

  return (
    <div className='ps-3 big_div'>
      <h3 className='py-3'>FrontEnd 010 guruhi</h3>
      <p>1-Module HTML, CSS</p>

      <div className="row g-0">
        {
          (columns) && columns.map((item, index) => {
            return (
              <div className="col style_name text-center" >
                {item.title}
              </div>
            )
          })
        }
      </div>

      <div className='row g-0 scrolly'>
        <div className="col-2">
          <div className="row flex-column">
            {
              (students) && students.map((item, index) => {
                return (
                  <div className="col style_name">
                    {index + 1}. {item.name}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-10">
          <div className="row g-0">
            {
              (days) && days.map((item, index) => {
                return (
                  <div className="col-2 cols_circle">
                    <div className='test'>
                      {item.day}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  );
}
