import React from 'react'
import logo from '../../../assets/images/footerImages/Subtract.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FiTwitter } from 'react-icons/fi'
import Button from '../../button/Button'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <img src={logo} alt="" />
                    <h1 className='title' style={{ 'color': '#8794BA' }}>ANALYTICS</h1>
                </li>
                <li>
                    <a href="#HEADER" className='scrool-top-link'>
                        <Button>
                            Scroll Top
                        </Button>
                    </a>
                </li>
                <li>
                    <AiOutlineInstagram className='icon' />
                    <CiFacebook className='icon' />
                    <FiTwitter className='icon' />
                </li>
            </ul>
        </footer>
    )
}

export default Footer

