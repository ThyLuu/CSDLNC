import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo.png'
import {Divider, Image} from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, TextField, InputAdornment, IconButton } from '@mui/material';
import { Typography } from 'antd';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {useMutation} from '@tanstack/react-query'
import * as UserService from'../../service/UserService'

const SignInPage = () => {
  
  const [email, setemail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');

  const handleOnchangePassword = (value) => {
    setShowPassword(!showPassword);
  }

  const handleLogin = () => {
    // Xử lý đăng nhập 
    mutation.mutate({
      email,
      password
    })
    console.log('email:', email);
    console.log('Password:', password);
  };


  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data) => UserService.loginUser(data)
  })

  console.log('mutation success!',mutation)
    
  const handleNavigateSignUp = () =>{
      navigate('/sign-up')
  }


  
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', background:'rgba(0,0,0,0.3', height:'100vh'}}>
      <div style={{width:'800px',height:'445px', borderRadius:'20px', background:'#FFF8EA', display:'flex'}}>
      <WrapperContainerLeft>
      <DialogTitle sx={{
        backgroundColor:'#FFF8EA', 
        fontWeight:'bold', color:'#38220f', 
        display:'flex',
        justifyContent:'center'}} >Đăng Nhập</DialogTitle>
      
        <TextField
          label="abc@gmail.com"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          sx={{
            backgroundColor:'#ff8e7',

            '& label.Mui-focused': {
              color: '#38220f',
            },

            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#38220f'
              },
              '& fieldset':{
                borderColor: '#38220f',
              },
              // CSS tùy chỉnh cho outlined input
              
              color:'#38220f', 
              '&:hover fieldset': {
                borderColor: '#38220f', 
              },

            },
          
          
          }}
        />

        <TextField
          label="Mật khẩu"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor:'#ff8e7',

            '& label.Mui-focused': {
              color: '#38220f',
            },

            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#38220f'
              },
              '& fieldset':{
                borderColor: '#38220f',
              },
              // CSS tùy chỉnh cho outlined input
              
              color:'#38220f', 
              '&:hover fieldset': {
                borderColor: '#38220f', 
              },

            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleOnchangePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              ),
            }}
        />
        
        <div style={{marginTop:'20px', fontSize:'14px'}}>
          Chưa có tài khoản phải hem?
          <button
            style={{border:'none', backgroundColor:'#f5f5dc', cursor:'pointer'
            }}
            onClick={handleNavigateSignUp}
            ><u style={{color:'#38220f', fontWeight:'bold'}}> Đăng kí </u> 
          </button>ở đây nha 
        </div>
      
        <Typography align='center'>
          <Button variant="contained" onClick={handleLogin} 
            sx={{
              backgroundColor:'#38220f',
              marginTop: '30px',
              justifyContent:'center',
              '&:hover': {
                backgroundColor: '#a67b5b', 
              }
            }}>
            Đăng Nhập
          </Button>
        </Typography>
      </WrapperContainerLeft>

      <WrapperContainerRight>
             <Image 
              src={imageLogo} 
              alt='Logo-Cái-Quán-Cà-Phê' 
              preview={false}
              height="300px" 
              width="300px"/>
      </WrapperContainerRight>
    </div>

    </div>
  )
}

export default SignInPage