import React from 'react';
import { useNavigate } from 'react-router-dom'
import {GrPrevious} from 'react-icons/gr'

const BackToBtn = () => {
    const navigate = useNavigate()
    return (
        <button
        onClick={()=>{navigate(-1)}}
        className="flex items-center font-bold"
        >
          <GrPrevious />  Orqaga
        </button>
    );
}

export default BackToBtn;
