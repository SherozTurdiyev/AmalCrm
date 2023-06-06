import React, { useState } from 'react';
import './Add_tech.css'
import { Modal, Upload, Button } from 'antd';
import { useMutationApi } from '../../../hooks/useApiMutation';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const AddTeach = () => {
  const [fileList, setFileList] = useState([])
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('')

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const mutation = useMutationApi("/teacher/teacher-create", "post")

  function addTeacherFunc() {
    const form = new FormData()
    // form.append()
    mutation.mutate(
      {
        password: 'hello',
        password2: 'hello',
        first_name: 'hello',
        last_name: 'helloyevich',
        resume: '',
        birth_date: '1998-01-09',
        email: '',
        salary: '',
        course: '',
        phone: '+998001234561',
        avatar: '',
        branch: ''

      }
    )
  }



  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      {/* <PlusOutlined /> */}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <div className='student_card'>
        <div className='student_card_top'>
          <h4>Shaxsiy Malumotlar</h4>
        </div>
        <div className="row container py-3">
          <div className='input_1 col-6'>
            <h5>Ismi *</h5>
            <input className='form-control' type="text" placeholder='Ismi' />
          </div>
          <div className='input_1 col-6'>
            <h5>Familiya *</h5>
            <input className='form-control' type="text" placeholder='Familiya' />
          </div>

          <div className='input_1 col-6'>
            <h5>Email </h5>
            <input className='form-control' type="email" placeholder='Email' />
          </div>
          <div className='input_1 col-6'>
            <h5>Tel raqami *</h5>
            <input className='form-control' type="number" placeholder='Tel raqami' />
          </div>


          <div className='input_1 col-6 mt-4'>
            <h5>Manzil</h5>
            <textarea className='form-control' type="text" placeholder='Manzil' rows={5} cols={20} />
          </div>
          <div className='input_1 col-6 mt-4'>
            <h5>Resume</h5>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
          </div>
          <div className='input_1 col-6'>
            <h5>User parol * </h5>
            <input className='form-control' type="password" placeholder='User parol *' />
          </div>
          <div className='input_1 col-6'>
            <h5>Parolni Takrorlang*</h5>
            <input className='form-control' type="password" placeholder='Parolni Takrorlang*' />
          </div>

          <div className='input_1 col-6 mt-4'>
            <h5>Tug’ilgan sana * </h5>
            <input className='form-control' type="text" placeholder='Tug’ilgan sana *' />
          </div>
          <div className='input_1 col-6 mt-4'>
            <h5>Toifani kiriting* </h5>
            <input className='form-control' type="text" placeholder='Toifani kiriting *' />
          </div>

        </div>
      </div>
      <div className='my-4'>
        <Button onClick={addTeacherFunc} className='float-end bg-indigo-500 text-white mx-2  ' size={'large'} shape="round" >
          Saqlash
        </Button>
        <Button className=' float-end text-dark  ' size={'large'} shape="round" >
          Bekor Qilish
        </Button>
      </div>
    </div>
  );
}

export default AddTeach;
