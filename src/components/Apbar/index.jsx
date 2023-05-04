import React, { useState } from 'react';
import './apbar.css'
import {
  HomeOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import { ImUserTie } from 'react-icons/im'
import { RiUser2Fill } from 'react-icons/ri'
import { BsCalendarDate } from 'react-icons/bs'
import { BiCubeAlt } from 'react-icons/bi'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { TbHexagonLetterA } from 'react-icons/tb'

import { Menu } from 'antd';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapsed(e) {
    if (e.key === 'crm') {
      setCollapsed(!collapsed);
    }
  };

  return (
    <div style={{ width: 256 }}>
      <Menu
        mode="inline"
        theme='dark'
        style={{ background: "#4D44B5", fontWeight: '500', height: '100vh', fontSize: '17px'}}
        inlineCollapsed={collapsed}
        onClick={toggleCollapsed}
        items={[
          // {label : `${collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}`},
          { label: "CRM", key: 'crm', icon: <TbHexagonLetterA style={{ fontSize: "30px", background: '#FB7D5B', padding: '3px', boxSizing: 'border-box' }} className='rounded-lg' /> },
          { label: "Statistika", key: "statistika", icon: <HomeOutlined style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "O'quvchilar", key: "o'quvchilar", icon: <ImUserTie style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "O'qituvchilar", key: "o'qituvchlar", icon: <RiUser2Fill style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Bildirishnoma", key: "bildirishnoma", icon: <BsCalendarDate style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Moliya", key: "moliya", icon: <FaHandHoldingUsd style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Guruhlar", key: "guruh", icon: <BiCubeAlt style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Ota-onalar uchun", key: "parents", icon: <UserOutlined style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Xabarlar", key: "xabar", icon: <MessageOutlined style={{ fontSize: "25px", marginRight: '5px' }} /> },
        ]}
      />
    </div>
  );
};

export default App;