import React from 'react'
import Header from '../../features/components/header/Header'
import FirstSection from '../../features/components/section/Section'
import SecondSection from '../../features/components/secondSection/Section'
import ThirthSection from '../../features/components/thirthSection/Section'
import FourthSection from '../../features/components/fourthSection/Section'
import Footer from '../../features/components/footer/Footer'
import './Container.css'

const Container = () => {
    return (
        <div className='root-child'>
            <div className='background-top'></div>
            <div className='container'>
                <Header />
                <FirstSection />
                <SecondSection />
                <ThirthSection />
                <FourthSection />
                <Footer />
            </div>
            <div className='background-bottom'></div>
        </div>
    )
}

export default Container