import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

export function LogoutBtn() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(
            ()=> {
                dispatch(logout())
            }
        )
    }
  return (
    <button onClick={logoutHandler} className=''>Logout</button>
  )
}

export default LogoutBtn