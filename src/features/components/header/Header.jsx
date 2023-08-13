import React from 'react'
import logo from '../../../assets/images/headerImages/Subtract.png'
import './Header.css'

const Header = () => {
    return (
        <header className='header' id='HEADER'>
            <ul>
                <li>
                    <img src={logo} alt="" />
                    <h1 className='title'>ANALYTICS</h1>
                </li>
                <li>
                    <button className='sing-in'>Sing in</button>
                    <button className='sing-up'>Sing Up</button>
                </li>
            </ul>
        </header>
    )
}

export default Header