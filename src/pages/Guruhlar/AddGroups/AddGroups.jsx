import { DatePicker, Input, Select } from 'antd';
import React, { useState } from 'react';
import { useRef } from 'react';
import BackToBtn from '../../../components/shared/BackToBtn';
import { useApi } from '../../../hooks/useApi';
import { useMutationApi } from '../../../hooks/useApiMutation';
import './AddGroup.css'

const AddGroups = () => {
    const { data: studentList } = useApi("studentlist", "/student/student-list/")
    const { data: teacherList } = useApi("teacherList", "/teacher/teacher-list")
    const mutation = useMutationApi("/reception/group-create/", "POST")
    const optionsStudents = studentList?.data?.results.map((item, index) => {
        return {
            value: item.id,
            label: item.first_name + " " + item.last_name
        }
    })

    const optionsTeachers = teacherList?.data?.results.map((item, index) => {
        return {
            value: item.id,
            label: item.first_name + " " + item.last_name
        }
    })

    const groupsName = useRef(null)
    const [groupTeacher, setGroupTeacher] = useState(null)
    const [students, setStudents] = useState([])
    const [start_date, setStart_date] = useState(null)
    const [end_date, setEnd_date] = useState(null)
    const [course_day, setCourse_day] = useState(null)

    const handleAddGroups = () => {
        mutation.mutate({
            "students": students,
            "name": groupsName.current.input.value,
            "start_time": start_date,
            "end_time": end_date,
            "teacher": groupTeacher,
            "course_days": course_day
        })
    }
    console.log(mutation)

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
                        <Select
                            placeholder="Guruh o'qituvchisi"
                            style={{ width: "100%" }}
                            options={optionsTeachers}
                            size='large'
                            onChange={(v) => {
                                setGroupTeacher(v)
                            }}
                        />
                    </div>

                    <div className='input_1 col-6'>
                        <h5>O’quvchilar qo’shish</h5>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            onChange={(v) => {
                                setStudents(v)
                            }}
                            options={optionsStudents}
                            size="large"
                        />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars Kunlari </h5>
                        <Select
                            style={{ width: "100%" }}
                            size="large"
                            placeholder="Dars kunlari"
                            options={[
                                {
                                    value: 1,
                                    label: "Toq Kunlari"
                                },
                                {
                                    value: 2,
                                    label: "Juft Kunlari"
                                },
                            ]}
                            onChange={(v) => {
                                setCourse_day(v)
                            }}
                        />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars boshlanish vaqti</h5>
                        <DatePicker onChange={(option, date) => { setStart_date(date) }} className='w-full' size='large' format={'YYYY-MM-DD'} />
                    </div>
                    <div className='input_1 col-6'>
                        <h5>Dars tugash vaqti</h5>
                        <DatePicker onChange={(option, date) => { setEnd_date(date) }} className='w-full' size='large' format={'YYYY-MM-DD'} />
                    </div>
                    {/* <div className='input_1 col-6'>
                        <h5>Dars Filiali</h5>
                        <Input size='large' type="password" placeholder='Filialini tanlang!' />
                    </div> */}
                    <div className='input_1 col-6'>
                        <h5> Dars xonasi </h5>
                        <Input size='large' type="text" placeholder='xona' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end my-3'>
                <button className="border-2 border-indigo-500  text-indigo-500 py-2 mr-4 px-5 rounded-3xl active:border-indigo-300 active:text-indigo-300">Bekor qilish</button>
                <button className='bg-indigo-500 text-white py-2 px-5 rounded-3xl active:bg-indigo-300' onClick={handleAddGroups}>Saqlash</button>
            </div>
        </div>
    );
}

export default AddGroups;
