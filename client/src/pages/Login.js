import { TextField, Typography ,Button} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Login.css"
import {useNavigate}  from "react-router-dom"
import axios from "axios"
// import {useDispatch} from "react-redux"
// import {authActions}  from "../store/store"
function Login() {
  const navigate=useNavigate()

    const[inputs,setInputs]=useState({
   name:"",
   email:"",
   password:""
    })
  const [signUp,setSignUp]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }

  },[])
//   const dispatch=useDispatch()
  const request= async (type)=>{
  const res= await axios.post(`http://localhost:5000/user/${type}`,{
    name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch((err)=>console.log(err))
    const data= await res.data
  
    if(!signUp&&data.success){
      localStorage.setItem("token",data.data)
      navigate("/")
     
    }
  }
  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }));
  }   //.then((data)=>localStorage.setItem("userId",data.user._id))
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(inputs) 
  if(signUp){request("register")//.then(()=>dispatch(authActions.login())).then(()=>navigate("/blogs"))
  .then(data=>console.log(data))
}
else{
  request("login")
}}

  return (
    <div className='main3_div'>
      <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection={"column"}
     alignItems="center"
     className="Box" sx={{width:{md:"40vw",sm:'80vw'}}}>
      <Typography variant='h2' > {signUp?"SignUp":"Login"}</Typography>
      {signUp && <TextField  value={inputs.name}

         className="text" placeholder='name'
          margin="normal"  name="name" onChange={handleChange}/>}
      <TextField   className="text"
       placeholder='Email'    margin="normal"   value={inputs.email}
        name="email" onChange={handleChange}/>
      <TextField  className="text" placeholder='password'  value={inputs.password}
       margin="normal"  name="password" onChange={handleChange}/>
     {signUp?<Button  variant="contained"  type="submit" > signUp</Button>: <Button  variant="contained"  type="submit" > Login</Button>}
      <Button onClick={()=>setSignUp(!signUp) }> Change to {signUp?"Login":"SignUp"}</Button>
    </Box>

      </form>
    </div>
  )
}

export default Login