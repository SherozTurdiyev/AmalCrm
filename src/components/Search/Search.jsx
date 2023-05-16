import React from 'react';
import { SearchOutlined , InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import './Search.css'
const Search = () => {
    return (
        <div>
            <Input
                placeholder="Qidiruv"
                prefix={<SearchOutlined className="text-slate-300 site-form-item-icon fs-3"/> }
                className='user fs-5'
            />
        </div>
    );
}

export default Search;
