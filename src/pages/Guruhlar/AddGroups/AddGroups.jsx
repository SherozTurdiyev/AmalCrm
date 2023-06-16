import { DatePicker, Input } from 'antd';
import React from 'react';
import { useRef } from 'react';
import BackToBtn from '../../../components/shared/BackToBtn';
import './AddGroup.css'

const AddGroups = () => {
    const groupsName = useRef(null)
    const teacherName = useRef(null)

    return (
        <div>
            <BackToBtn />
            <div className='student_card my-4'>
                <div className='student_card_top'>
                    <h4>Shaxsiy Malumotlar</h4>
                </div>
                <div className="row container py-3">
                    <div className='input_1 col-6'>
                        <h5>Guruh nomi *</h5>
                        <Input size='large' placeholder='Ism' type='text' ref={groupsName} />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Guruh O’qituvchisi * </h5>
                        <Input size="large" type="text" placeholder='Familiya' ref={teacherName} />
                    </div>

                    <div className='input_1 col-6'>
                        <h5>O’quvchilar qo’shish</h5>
                        <Input  defaultValue="To'raqulov" size='large' />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars Kunlari </h5>
                        <Input addonBefore={"+998"} placeholder='Tel raqami' size='large' />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars boshlanish vaqti</h5>
                        <DatePicker onChange={(option, date) => { setBirth_date(date) }} className='w-full' size='large' format={'YYYY-MM-DD'} />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars tugash vaqti</h5>
                        <Input size="large" type="text" placeholder='Manzil' />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars Filiali</h5>
                        <Input size='large' type="password" placeholder='User parol *' />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Yordamchi ustoz</h5>
                        <Input size='large' type="password" placeholder='Parolni Takrorlang*' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end my-3'>
                <button className="border-2 border-indigo-500  text-indigo-500 py-2 mr-4 px-5 rounded-3xl active:border-indigo-300 active:text-indigo-300">Bekor qilish</button>
                <button className='bg-indigo-500 text-white py-2 px-5 rounded-3xl active:bg-indigo-300' onClick={"createStudent"}>Saqlash</button>
            </div>
        </div>
    );
}

export default AddGroups;
