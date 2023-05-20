import React from 'react';
import About_Student from '../../components/About_Student/About_Student';
import { useApi } from '../../hooks/useApi';

const Index = () => {
    const {data} = useApi("singleStudent" , '/student/student-update-delete/1')
    const studentInfo = data?.data || {}

    return (
        <div>
            <About_Student info={studentInfo} role="O'quvchi" />
        </div>
    );
}

export default Index;
