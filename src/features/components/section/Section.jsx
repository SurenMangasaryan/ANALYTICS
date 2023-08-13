import React from 'react'
import Button from '../../button/Button'
import MainScreen from '../../../assets/images/firstSectionImages/main-screen.png'
import { Link } from 'react-router-dom'
import './Section.css'

const Section = () => {
    return (
        <section className='dashboard'>
            <div className='dashboard-left-panel'>
                <h2 className='h2'>
                    Monitor your business
                    on real-time dashboard
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                </p>
                <Link to={'/tryforfree'}><Button>Try For Free</Button></Link>
            </div>
            <div className='dashboard-right-panel'>
                <img src={MainScreen} alt="" />
            </div>
        </section>
    )
}

export default Section