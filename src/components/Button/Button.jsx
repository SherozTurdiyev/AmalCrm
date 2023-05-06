import React from 'react';
import {FiPlus} from 'react-icons/fi'
const Button = () => {
	return (
		<div>
			<button style={{width:200 , height: 50}} type="button" className="flex justify-center items-center bg-indigo-500 p-2 rounded-pill" disabled>
				 <FiPlus className='fs-5 text-light' /> <p className='fs-5 text-light' style={{padding: 0 , margin:0}}>O’quvchi</p>
			</button>
		</div>
	);
}

export default Button;
