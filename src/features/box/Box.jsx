import React from 'react'
import watch from '../../assets/images/secondSectionImages/watch.png'
import pc from '../../assets/images/secondSectionImages/pc.png'
import rocket from '../../assets/images/secondSectionImages/rocket.png'
import './Box.css'

const Box = () => {

    const boxElements = [
        {
            image: watch,
            title: 'Monitoring 24/7',
            description: `Lorem ipsum dolor sit amet, consectetur adipis
            cing elit. Elementum nisi aliquet volutpat.`
        },
        {
            image: pc,
            title: 'Widget System',
            description: `Sapien in etiam vitae nibh nunc mattis imperdiet
            sed nullam. Vitae et, tortor pulvinar risus pulvinar.`
        },
        {
            image: rocket,
            title: 'Best Performance',
            description: `Lorem ipsum dolor sit amet, consectetur adipis
            cing elit. Elementum nisi aliquet volutpat.`
        }
    ]

    return (
        <>
            {boxElements.map(element => {
                return (
                    <div className='box' key={element.title}>
                        <img src={element.image} alt="" />
                        <h4 className='box-title'>{element.title}</h4>
                        <p className='box-description'>{element.description}</p>
                    </div >
                )
            })}
        </>
    )
}

export default Box