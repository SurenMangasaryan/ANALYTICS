import React from 'react'
import logo from '../../../assets/images/headerImages/Subtract.png'
import logoGray from '../../../assets/images/footerImages/Subtract.png'
import watch from '../../../assets/images/tryForFreeHeaderImages/Icon=planning.png'
import pc from '../../../assets/images/tryForFreeHeaderImages/Icon=computer.png'
import rocket from '../../../assets/images/tryForFreeHeaderImages/Icon=speed.png'
import './Header.css'

const Header = () => {
    return (
        <header className='tryforfree-header'>
            <ul>
                <div className='titles-list'>
                    <li>
                        <img src={logo} alt="" />
                        <h2 className='title'>ANALYTICS</h2>
                    </li>
                    <li>
                        <img src={logoGray} alt="" />
                        <h2 className='title' style={{ 'color': '#8794BA' }}>ANALYTICS</h2>
                    </li>
                </div>
                <li className='titles-list imgs-list'>
                    <img src={watch} alt="" />
                    <img src={pc} alt="" />
                    <img src={rocket} alt="" />
                </li>
            </ul>
        </header>
    )
}

export default Header