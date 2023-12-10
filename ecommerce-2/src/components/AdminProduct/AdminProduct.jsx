import React, { useState } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style'
import { Button, Checkbox, Form, Input, Modal } from 'antd'
import {PlusOutlined,UploadOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import { getBase64 } from '../../utils'
import { useMutationHooks } from '../../hooks/userMutationHook'
import * as UserService from'../../service/UserService'
import * as ProductService from '../../service/ProductService'


const AdminProduct = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

const [stateProduct, setStateProduct] = useState({
    name:'',
    price:'',
    description:'',
    rating:'',
    image:'',
    type:'',
    countInStock:''
})

const mutation = useMutationHooks(
    (data) => {
        const { name,
        price,
        description,
        rating,
        image,
        type,
        countInStock} = data
        ProductService.createProduct(name,
            price,
            description,
            rating,
            image,
            type,
            countInStock)
    }
)

const { data,  isSuccess, isError } = mutation

const handleOnchange= (e) => {
    setStateProduct({
        ...stateProduct ,
        [e.target.name] : e.target.value
    })

}


const handleCancel = () => {
    setIsModalOpen(false);
}

const onFinish = () => {
    mutation.mutate(stateProduct)
    console.log('finish',stateProduct)
}

const handleOnchangeAvatar = async ({fileList}) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj );
    }
    setStateProduct({
        ...stateProduct,
        image: file.preview
    })
}

  return (
    <>
    <WrapperHeader><h1>Quản lý Sản phẩm</h1></WrapperHeader>

    <div style={{marginTop:'10px'}}>
        <Button style={{height:'150px', width:'150px', borderRadius:'6px', borderStyle:'dotted'}}
        onClick={() => setIsModalOpen(true)}>
            <PlusOutlined  style={{
                fontSize:'60px'
            }} />
        </Button>
    </div>
    
    <div style={{marginTop:'15px'}}>
        <TableComponent/>
    </div>

    <Modal title="Tạo sản phẩm" open={isModalOpen}  onCancel={handleCancel} 
    okButtonProps={{ style: { display: 'none' } }}>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          required: true,
          message: 'Please input product type',
        },
      ]}
    >
      <InputComponent value={stateProduct.name} onChange={handleOnchange}  name="name"/>
    </Form.Item>

    <Form.Item
      label="Type"
      name="type"
      rules={[
        {
          required: true,
          message: 'Please input product type!',
        },
      ]}
    >
      <InputComponent value={stateProduct.type} onChange={handleOnchange}  name="type" />
    </Form.Item>

    <Form.Item
      label="Count in Stock"
      name="countInStock"
      rules={[
        {
          required: true,
          message: 'Please input product countInStock!',
        },
      ]}
    >
      <InputComponent value={stateProduct.countInStock} onChange={handleOnchange}  name="countInStock" />
    </Form.Item>

    <Form.Item
      label="Price"
      name="Price"
      rules={[
        {
          required: true,
          message: 'Please input product price!',
        },
      ]}
    >
      <InputComponent value={stateProduct.price} onChange={handleOnchange}  name="price" />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please input product description!',
        },
      ]}
    >
      <InputComponent alue={stateProduct.description} onChange={handleOnchange}  name="description" />
    </Form.Item>

    <Form.Item
      label="Rating"
      name="rating"
      rules={[
        {
          required: true,
          message: 'Please input product rating!',
        },
      ]}
    >
      <InputComponent alue={stateProduct.rating} onChange={handleOnchange}  name="rating" />
    </Form.Item>

    <Form.Item
      label="Image"
      name="image"
      rules={[
        {
          required: true,
          message: 'Please input product image!',
        },
      ]}
    >
      <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                    <Button>Select File</Button>
                    {stateProduct?.image && (
                            <img src={stateProduct?.image} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar"/>
                        )}
    </WrapperUploadFile>
    </Form.Item>


    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    
      
    </>
    
  )
}

export default AdminProduct
