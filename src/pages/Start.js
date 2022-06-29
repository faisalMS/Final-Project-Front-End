import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css';



const Start = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/home')
    }
return (
    <div className='start' >
        <h1 className='text'>Bills App</h1>
        <button className='btn' onClick={onClick} variant="contained">Start</button>
    </div>
    );
}

export default Start