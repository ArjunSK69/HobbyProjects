import React, { useEffect } from 'react'

import './loginScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

  const dispatch = useDispatch()
  const accessToken = useSelector(state=>state.auth.accessToken)
  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch(login())
  }

  useEffect(()=>{
    if(accessToken){
      navigate('/');
    }
  },[accessToken, navigate])

  return (
    <div className="login">
        <div className="login_container">
            <img src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" />
            <button onClick={handleLogin}>Login With google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen
