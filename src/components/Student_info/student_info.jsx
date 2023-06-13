import { Button, Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const columns = [
  {
    title: 'N#',
    dataIndex: "index",
    width: "60px"
  },
  {
    title: 'FISH',
    dataIndex: 'last_name',
    width: "200px"
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Sana',
    dataIndex: 'birth_date',
  },
  {
    title: 'Contact',
    dataIndex: 'phone',
  },
  {
    title: 'Guruh',
    dataIndex: 'groups',
  },
  {
    title: '',
    dataIndex: 'Hodisa',
    width: "60px"
  },
];

const App = ({ dataSource, isLoading }) => {
  const navigate = useNavigate()

  let data = dataSource.map((item, index) => {
    return {
      index: index+1 , 
      last_name: item.last_name,
      id: item.id,
      birth_date: item.user.birth_date,
      phone: item.user.phone, 
      groups: item.user.groups
    }
  })

  const onRowHandle = (record , index)=>{
    return{
      onClick: ()=>{navigate(`/student/${record.id}`)}
    }
  }

  return (
    <div>
      <Table  columns={columns} dataSource={data} loading={isLoading} onRow={onRowHandle} />
    </div>
  );
};
export default App;