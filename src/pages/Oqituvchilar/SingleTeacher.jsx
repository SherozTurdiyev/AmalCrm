import React from 'react';
import About_Student from '../../components/About_Student/About_Student';
import { useApi } from '../../hooks/useApi';

const SingleTeacher = () => {
    const { data } = useApi("singleTeacher", "/teacher/teacher-update/1")
    const infoQ = data?.data || {}
    console.log();
    return (
        <div>
            <h1>Single teacher</h1>
            <About_Student info={infoQ} role="Frontend o’qituvchi(Master)" />
            <div>

            </div>
        </div>
    );
}

export default SingleTeacher;
