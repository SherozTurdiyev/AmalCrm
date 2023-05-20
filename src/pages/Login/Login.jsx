import React, { useState } from 'react';
import LoginImg from '../../assets/svg/login.svg'
import Logo from '../../assets/images/crm.png'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios'
import { requestApi } from '../../services/api';
import { useMutationApi } from '../../hooks/useApiMutation';
import PageLoader from '../../components/shared/PageLoader/PageLoader';

const Login = () => {
    const navigate = useNavigate()
    const phoneNumber = useRef('')
    const password = useRef("")
    const [isLoading, SetLoading] = useState(false)


    function handlerLogin() {
        SetLoading(true)
        let infoData = {
            "phone": "+998938626563",
            "password": "1"
        }
        axios.post("http://shamuratov.pythonanywhere.com/api/v1/user/login/", { ...infoData })
            .then((res) => {
                localStorage.setItem("access", res.data?.user?.access)
                localStorage.setItem("refresh", res.data?.user?.refresh)
                if (res.data.success) { 
                    navigate('/Statistika')
                    SetLoading(false)
                }
            })
    }

    if (isLoading) {
        return <PageLoader />
    }
    else {
        return (
            <div className='w-full h-screen flex flex-row justify-between items-center bg-light'>
                <div className="w-[500px] h-full bg-white flex flex-col justify-center items-center">
                    <img className='mx-auto w-[125px] mb-6' src={Logo} alt="" />
                    <p className='text-center'>Log in</p>
                    <div className='w-[348px] mx-auto DM-Sans mb-5'>
                        <p className='mb-[9px] font-medium text-base DM-Sans text-logintext'>
                            Phone number
                        </p>
                        <input
                            ref={phoneNumber}
                            type="number"
                            className='bg-light rounded-xl w-[348px] h-[50px] outline-none p-4 font-medium text-base text-dark'
                            placeholder='+998912345678'
                        />
                    </div>
                    <div className='w-[348px] mx-auto DM-Sans mb-[30px]'>
                        <p className='mb-[9px] font-medium text-base DM-Sans text-logintext'>Password</p>
                        <input
                            ref={password}
                            type="password"
                            className='bg-light rounded-xl w-[348px] h-[50px] outline-none p-4 font-medium text-base text-dark mb-[38px]'
                            placeholder='********'
                        />
                        <a href="#" className='text-right w-full inline-block font-medium text-base text-slate-600'>Forget Password</a>
                    </div>
                    <div className='w-[348px] mx-auto DM-Sans'>
                        <button className='bg-slate-600 w-full text-white h-[50px] rounded-xl text-base active:bg-slate-400' onClick={handlerLogin}>Login</button>
                    </div>
                </div>
                <div className=''>
                    <img className='w-[647px] mr-[157px]' src={LoginImg} alt="" />
                </div>
            </div>
        );
    }
}

export default Login;
