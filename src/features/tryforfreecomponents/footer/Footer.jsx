import React from 'react'
import Button from '../../button/Button'
import './Footer.css'
import { useNavigate } from 'react-router'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='tryForFree-footer' onClick={() => {navigate('/')}}>
            <Button>Go back</Button>
        </div>
    )
}

export default Footer