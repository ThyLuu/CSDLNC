import React,{useState} from 'react';
import { Badge, Col, Row } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
// import Search from 'antd/lib/transfer/search';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
    const navigate = useNavigate();
    
    const handleNavigateLogin = () =>{
        navigate('/sign-in')
    }
  

    return (
        <div>
            <WrapperHeader >
                <Row>
                    
                </Row>
                <Col span={6}>
                    <WrapperTextHeader>Cái Quán Cà Phê</WrapperTextHeader>
                </Col>

                <Col span={10}>
                    <ButtonInputSearch size="large" placeholder="Tìm kiếm ..." textButton="Tìm"/>
                </Col>

                <Col span={10}  style={{display: 'flex', gap: '90px'}}>
                    <div style={{marginLeft:'55px'}}>
                        <Badge count={4} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>
                        <WrapperTextHeaderSmall>Đơn hàng</WrapperTextHeaderSmall>
                    </div>

                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>
                                <button 
                                    style={{backgroundColor:'#38220f', 
                                    border:'none',
                                    cursor:"pointer",
                                    padding:"0px"}}
                                    onClick={handleNavigateLogin}
                                    >
                                        Đăng ký / Đăng nhập</button>
                            </WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                </Col>
            </WrapperHeader>

           

        </div>
    )
}

export default HeaderComponent