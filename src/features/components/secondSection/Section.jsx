import React from 'react'
import Box from '../../box/Box'
import './Section.css'

const Section = () => {
    return (
        <section className='features'>
            <h2 className='features-h2'>Main Features</h2>
            <p className='features-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
            </p>
            <div className='boxes'>
                <Box />
            </div>
        </section>
    )
}

export default Section