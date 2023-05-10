import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import axios from "axios"


function Home() {
    const user=useSelector(state=>state.users)
    // useEffect(async()=>{
    
    //   // console.log(user)
    
    
    // },[])
  return (
    <div>Home
        { <h1>{user.email}</h1> }
    </div>
  )
}

export default Home