import { Input, Select, Space } from 'antd';
import React, { useRef } from 'react';
import QueryHook from '../../hooks/QueryHook/QueryHook';
import { BiSearchAlt } from 'react-icons/bi'
import { Direction, Groups, Year } from '../../services/constants';

const Filter = (
    { actionBtn = null,
        nameFilter = false,
        directionFilter = false,
        groupFilter = false,
        yearFilter = false
    }
) => {
    const { location, MergeQueryParams } = QueryHook()
    const userName = useRef(null)


    return (
        <div className='flex  justify-between items-center pt-3 pb-4'>
            <div className='flex gap-2 w-[60%]'>
                {
                    nameFilter &&
                    <div className='relative'>
                        <Input className='w-[350px] pl-4 pr-12 ' size='large' ref={userName} placeholder="Qidiruv" />
                        <BiSearchAlt
                            className='absolute text-2xl right-[15px] top-[9px] text-mainColor '
                            onClick={() => {
                                MergeQueryParams({ user: userName.current.input.value });
                                console.log(userName.current.input.value)
                            }}
                        />
                    </div>
                }
                {
                    directionFilter &&
                    <Select
                        defaultValue="Yo’nalishi"
                        style={{
                            width: 180,
                        }}
                        size='large'
                        options={Direction}
                        onChange={(direction) => {
                            MergeQueryParams({ direction })
                        }}
                    />
                }
                {
                    groupFilter &&
                    <Select
                        defaultValue="Guruxlar"
                        style={{ width: 180 }}
                        size='large'
                        options={Groups}
                        onChange={(group) => {
                            MergeQueryParams({ group })
                        }}
                    />
                }
                {
                    yearFilter &&
                    <Select
                        defaultValue="Yil"
                        style={{ width: 180 }}
                        size='large'
                        options={Year}
                        onChange={(year) => {
                            MergeQueryParams({ year })
                        }}
                    />
                }
            </div>
            <div>
                {actionBtn}
            </div>
        </div>
    );
}


export default Filter;
