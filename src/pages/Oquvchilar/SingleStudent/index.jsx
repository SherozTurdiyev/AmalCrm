import React from 'react';
import { useParams } from 'react-router-dom';
import About_Student from '../../../components/About_Student/About_Student';
import PageLoader from '../../../components/shared/PageLoader/PageLoader';
import { useApi } from '../../../hooks/useApi';

const Index = () => {
    const params = useParams()
    const { data, isLoading } = useApi("singleStudent", `/student/student-update-delete/${params.id}`)
    const studentInfo = data?.data || {}
    return (
        <div>
            {
                !!isLoading ?
                    <PageLoader />
                    :
                    <About_Student info={studentInfo} role="O'quvchi" />
            }
        </div>
    );
}

export default Index;
