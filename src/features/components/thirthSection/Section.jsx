import React from 'react'
import firstImage from '../../../assets/images/thirthSectionImages/screen-01.png'
import secondImage from '../../../assets/images/thirthSectionImages/screen-02.png'
import thirthImage from '../../../assets/images/thirthSectionImages/screen-03.png'
import './Section.css'

const Section = () => {

    const firstObject = {
        title: `Automated Reports & Widget Alerts`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.`,
        image: firstImage
    }

    const secondObject = {
        title: `Fully customizable to address your needs `,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.`,
        image: secondImage
    }

    const thirthObject = {
        title: `Pre-built Dashboard Templates`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.`,
        image: thirthImage
    }

    return (
        <div className="thirth-section">
            <div className='panel'>
                <div className="panel-left">
                    <h2 className='panel-title'>{firstObject.title}</h2>
                    <p className='panel-description'>{firstObject.description}</p>
                </div>
                <div className="panel-right">
                    <img src={firstObject.image} alt="" />
                </div>
            </div>

            <div className='panel'>
                <div className="panel-right second-panel-img">
                    <img src={secondObject.image} alt="" />
                </div>
                <div className="panel-left second-panel-texts">
                    <h2 className='panel-title'>{secondObject.title}</h2>
                    <p className='panel-description'>{secondObject.description}</p>
                </div>
            </div>

            <div className='panel'>
                <div className="panel-left">
                    <h2 className='panel-title'>{thirthObject.title}</h2>
                    <p className='panel-description'>{thirthObject.description}</p>
                </div>
                <div className="panel-right">
                    <img src={thirthObject.image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section