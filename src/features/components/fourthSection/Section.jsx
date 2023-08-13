import React from 'react'
import { Link } from 'react-router-dom'
import './Section.css'

const Section = () => {

    const pStyle = {
        'textAlign': 'center',
        'width': '760px'
    }

    return (
        <div className='plans'>
            <div className='plans-text'>
                <h2 className='h2'>Pricing Plans</h2>
                <p style={pStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet
                    volutpat pellentesque volutpat est.
                </p>
            </div>

            <div className='price-boxes'>
                <div className='price-box'>
                    <div className='title-desc'>
                        <h3>Starter</h3>
                        <p>up to 3 users</p>
                    </div>

                    <div className='hr'></div>

                    <div>
                        <div className='price'>
                            <span>$</span>
                            <h2>29</h2>
                        </div>
                        <p>pet month</p>
                    </div>

                    <Link to={'/tryforfree'}><button className='price-btn'>Order</button></Link>
                </div>

                <div className='price-box' style={{ 'backgroundColor': 'white' }}>
                    <div className='title-desc'>
                        <h3 style={{ 'color': '#172755' }}>Standart</h3>
                        <p>up to 20 users</p>
                    </div>

                    <div className='hr'></div>

                    <div>
                        <div className='price'>
                            <span style={{ 'color': '#172755' }}>$</span>
                            <h2 style={{ 'color': '#172755' }}>99</h2>
                        </div>
                        <p>pet month</p>
                    </div>

                    <Link to={'/tryforfree'}><button className='second-price-btn'>Order</button></Link>
                </div>

                <div className='price-box'>
                    <div className='title-desc'>
                        <h3>Premium</h3>
                        <p>up to 200 users</p>
                    </div>

                    <div className='hr'></div>

                    <div>
                        <div className='price'>
                            <span>$</span>
                            <h2>299</h2>
                        </div>
                        <p>pet month</p>
                    </div>

                    <Link to={'/tryforfree'}><button className='thirth-price-btn'>Order</button></Link>
                </div>
            </div>

            <div className='plans-hr'></div>
        </div>
    )
}

export default Section