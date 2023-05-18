import React from 'react'
import './studentHis.css'
import { Divider, Table } from 'antd';

const columns = [
  {
    title: 'N#',
    dataIndex: 'key',
  },
  {
    title: "Yo'nalishi",
    dataIndex: 'yonalish',
  },
  {
    title: 'Kun/oy/yil',
    dataIndex: 'data',
  },
  {
    title: "To'lov miqdori",
    dataIndex: 'miqdor',
  },
  {
    title: 'Davomiyligi',
    dataIndex: 'davomiyligi',
  },
];

const data = [
  {
    key: '1',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
  {
    key: '2',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
  {
    key: '3',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
  {
    key: '4',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
  {
    key: '5',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
  {
    key: '6',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
  {
    key: '7',
    yonalish: 'FrontEnd',
    data: '12.12.2022',
    miqdor: '$50.30',
    davomiyligi: 'Full'
  },
]

export default function Student_his() {
  return (
    <div>
      <h2>To'lov tarixi.</h2>
      <div>
        <Divider>Middle size table</Divider>
        <Table columns={columns} dataSource={data} size="large" />
      </div>
    </div>
  )
}
