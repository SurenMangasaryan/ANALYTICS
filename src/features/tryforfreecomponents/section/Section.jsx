import React from 'react'
import first from '../../../assets/images/tryForFreeSectionImages/chart-3.png'
import second from '../../../assets/images/thirthSectionImages/screen-01.png'
import thirth from '../../../assets/images/thirthSectionImages/screen-02.png'
import fourth from '../../../assets/images/thirthSectionImages/screen-03.png'
import fiveth from '../../../assets/images/tryForFreeSectionImages/Rectangle 9.png'
import './Section.css'

const Section = () => {
    return (
        <section className='tryForFree-section'>
            <div className='list'>
                <div className='two-img'>
                    <div>
                        <img src={first} alt="" className='first-image' />
                    </div>
                    <div>
                        <img src={fiveth} alt="" />
                    </div>
                </div>
                <div className='three-img'> 
                    <div>
                        <img src={second} alt="" />
                    </div>
                    <div>
                        <img src={thirth} alt="" />
                    </div>
                    <div>
                        <img src={fourth} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section