import React, { useRef, useState } from 'react';
import './Add_tech.css'
import { Modal, Upload, Button, Input, DatePicker, Select } from 'antd';
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

  const first_name = useRef(null);
  const last_name = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const [birth_date, setBirth_date] = useState(null)
  const password = useRef(null)
  const password2 = useRef(null)
  const salary = useRef(null)


  const mutation = useMutationApi("/teacher/teacher-create", "post")


  function addTeacherFunc() {
    let newTeacher = {
      "first_name": first_name.current.input.value,
      "last_name": last_name.current.input.value,
      "email": email.current.input.value + "@gmail.com",
      "phone": "+998" + phone.current.input.value,
      "birth_date": birth_date,
      "password": password.current.input.value,
      "password2": password2.current.input.value,
      // "course": 0,
      // "salary": salary.current.input.value,
    }
    console.log(newTeacher)


    mutation.mutate(newTeacher)
  }

  if (mutation?.data?.response?.status == 400) {
    let errorKeys = []
    for (const key in mutation?.data?.response?.data) {
      errorKeys.push(key)
    }
    console.log(errorKeys);
    Modal.error({
      title: "Xatolik Kuzatildi!",
      okButtonProps: {
        style: {
          backgroundColor: "#6366F1"
        }
      },
      content: <div className='mt-3'>
        {errorKeys.map((item, i) => {
          return (
            <p className='font-semibold m-0'>
              {mutation?.data?.response?.data[item]}
            </p>
          )
        })}
      </div>
    })
  }

  if (mutation?.data?.status == 201) {
    Modal.success({
      okButtonProps:{
        style:{
          background:"#6366F1",
        }
      },
      title: "Muvaffaqiyatli Saqlandi!",
      onOk: ()=>{navigate("/Oqituvchilar")}
    })
  }



  const handleChange = ({ fileList: newFileList }) => {setFileList(newFileList); console.log(newFileList)}
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
    <div className='mt-5'>
      <div className='student_card'>
        <div className='student_card_top'>
          <h4>Shaxsiy Malumotlar</h4>
        </div>
        <div className="row container">
          <div className='input_1 col-6'>
            <h5>Ismi *</h5>
            <Input size='large' placeholder='Ism' type='text' ref={first_name} />
          </div>
          <div className='input_1 col-6'>
            <h5>Familiya *</h5>
            <Input ref={last_name} size="large" type="text" placeholder='Familiya' />
          </div>

          <div className='input_1 col-6'>
            <h5>Email </h5>
            <Input ref={email} addonAfter="@gmail.com" placeholder='example' size='large' />
          </div>
          <div className='input_1 col-6'>
            <h5>Tel raqami *</h5>
            <Input addonBefore={"+998"} ref={phone} placeholder='Tel raqami' size='large' />
          </div>


          <div className='input_1 col-6'>
            <h5>Manzil</h5>
            <textarea className='form-control' type="text" placeholder='Manzil' rows={5} cols={20} />
          </div>
          <div className='input_1 col-6'>
            <h5>Resume</h5>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
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
            <Input size='large' ref={password} type="password" placeholder='User parol *' />
          </div>
          <div className='input_1 col-6'>
            <h5>Parolni Takrorlang*</h5>
            <Input size='large' ref={password2} type="password" placeholder='Parolni Takrorlang*' />
          </div>

          <div className='input_1 col-6 mt-4'>
            <h5>Tug’ilgan sana * </h5>
            <DatePicker onChange={(option, date) => { setBirth_date(date) }} className='w-full' size='large' format={'YYYY-MM-DD'} />
          </div>
          <div className='input_1 col-6 mt-4'>
            <h5>Toifani kiriting* </h5>
            <Select
              style={{ width: "100%" }}
              defaultValue="frontend"
              size='large'
              options={
                [
                  { id: 1, value: "frontend", label: "Frontend" }
                ]
              }
            />
          </div>

        </div>
      </div>
      <div className='my-4'>
        <Button
          onClick={addTeacherFunc}
          className='float-end bg-indigo-500 text-white mx-2  ' size={'large'}
          shape="round"
        >
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
