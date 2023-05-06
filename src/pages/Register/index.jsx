import React from 'react';
import './Register.css'
import Logo from '../../assets/images/crm.png'
import Asosiy from '../../assets/images/asosiy.png'
import { Input, Button } from 'antd';

const Index = () => {
  const forInp = [
    {
      typ: 'text',
      pass: 'Nubmer'
    },
    {
      typ: 'password',
      pass: 'password'
    },

  ]
  return (
    <div className='row text-center gx-0'>
      <div className=' col-3 d-flex justify-content-center align-items-center'>
        <div className='registerCard'>
          <div>
            <img width={200} className='m-auto' src={Logo} alt="" />
            <h3>Log in</h3>
            <div>
              <Input className='w-75 my-2' placeholder="Number" />
              <Input.Password className='w-75 my-2' placeholder="Password" />
            </div>
            <p className='fload-end text-primary'>Forget Password</p>
            <Button className='bg-violet-600 w-75 text-light'>
              Log in
            </Button>
          </div>
        </div>
      </div>
      <div className='col-9 bg-light flex items-center justify-center'>
          <img src={Asosiy} alt="salom" />
      </div>
    </div>
  );
}

export default Index;
