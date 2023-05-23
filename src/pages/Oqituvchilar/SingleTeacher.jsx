import React from 'react';
import { useParams } from 'react-router-dom';
import About_Student from '../../components/About_Student/About_Student';
import PageLoader from '../../components/shared/PageLoader/PageLoader';
import Teacher_Lesson from '../../components/Teacher_lesson/Teacher_Lesson';
import { useApi } from '../../hooks/useApi';

const SingleTeacher = () => {
    const { id } = useParams()
    const { data } = useApi("singleTeacher", `/teacher/teacher-update/${id}`)
    const infoQ = data?.data || {}

    const groups = useApi("teacher-groups", `/teacher/teacher-groups?teacher=${id}`)
    const groupsList = groups?.data?.data?.results || []

    return (
        <div>
            <About_Student info={infoQ} role="Frontend o’qituvchi(Master)" />
            <div className='mt-5 w-full bg-white py-6 px-10 rounded-3xl' >
                {
                    groups.isLoading ?
                        <PageLoader />
                        :
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                groupsList.map((item, index) => (<div className='col-span-1'><Teacher_Lesson item={item} /></div>))
                            }
                        </div>
                }
            </div>
        </div>
    );
}

export default SingleTeacher;
