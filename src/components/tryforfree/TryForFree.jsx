import React from 'react'
import Header from '../../features/tryforfreecomponents/header/Header'
import Section from '../../features/tryforfreecomponents/section/Section'
import Footer from '../../features/tryforfreecomponents/footer/Footer'
import './TryForFree.css'

const TryForFree = () => {
    return (
        <div className='background'>
            <div className="container">
                <Header />
                <Section />
                <Footer />
            </div>
        </div>

    )
}

export default TryForFree