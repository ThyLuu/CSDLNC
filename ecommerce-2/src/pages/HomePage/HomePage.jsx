import React, {useState} from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { StyledBody, WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import love from '../../assets/images/Love.png'
import passion from '../../assets/images/Passion.png'
import respect from '../../assets/images/Respect.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const HomePage = () => {
 
  return (
    <>
        <StyledBody>
        <NavbarComponent/>
        <SliderComponent arrImages={[love, passion, respect]} />

        <div style={{marginTop:'50px'}}>
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        </div>

        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
          <WrapperButtonMore
            textButton="Xem thêm"
            type="outline"
            styleButton={{ border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)', width: '240px', height: '38px', borderRadius: '5px' }}
            styleTextButton={{ fontWeight: '500' }}
          />
        </div>

        </StyledBody>


    </>
  )
}

export default HomePage
