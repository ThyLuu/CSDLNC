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

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);


  const [password, setPassword] = useState('');

  const handleOnchangePassword = (value) => {
    setShowPassword(!showPassword);
  }

  const handleLogin = () => {
    // Xử lý đăng nhập 
    console.log('email:', email);
    console.log('Password:', password);
  };


  const navigate = useNavigate();
    
  const handleNavigateLogIn = () =>{
      navigate('/sign-in')
  }

  const handleOnchangeEmail = (event)=>{
    setEmail(event.target.value);
    setError(false);

 }

 const handleSubmit = () => {
  if (email.trim() === '') {
    setError(true);
  } else {
    // Thực hiện các hành động khi dữ liệu hợp lệ
    console.log('Dữ liệu hợp lệ:', email);
  }
};


  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', background:'rgba(0,0,0,0.3', height:'100vh'}}>
      <div style={{width:'800px',height:'500px', borderRadius:'20px', background:'#FFF8EA', display:'flex'}}>
      <WrapperContainerLeft>
      <DialogTitle sx={{
        backgroundColor:'#FFF8EA', 
        fontWeight:'bold', color:'#38220f', 
        display:'flex',
        justifyContent:'center'}} >Đăng Kí</DialogTitle>
      
        <TextField
          label="abc@gmail.com"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          error={error}
          helperText={error ? 'Vui lòng nhập thông tin' : ''}
          varriant="filled" 
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

        <TextField
          label="Nhập lại mật khẩu"
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
          Đã có tài khoản?
          <button
            style={{border:'none', backgroundColor:'#f5f5dc', cursor:'pointer'
            }}
            onClick={handleNavigateLogIn}
            ><u style={{color:'#38220f', fontWeight:'bold'}}> Đăng nhập </u> 
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
            Đăng Kí
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

export default SignUpPage