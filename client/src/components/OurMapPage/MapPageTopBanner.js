import React from 'react'
import banner_placeholder from '../../assets/banner_placeholder2.png'

export default function MapPageTopBanner() {
    return (
        // <div className='mapPageTopBanner'>
        //     <div className='left'>
        //         <span>150+</span>
        //     </div>
        //     <div className='right'>
        //         <span>Renters from across Canada are excited to try Rentwallex.</span>
        //     </div>
        // </div>

        <div className='headlineBanner'>
            <img src={banner_placeholder} alt="Our Map Banner" />
            <div className='mapPageTopBanner'>
                <div className='left'>
                    <span>150+</span>
                </div>
                <div className='right'>
                    <span>Renters from across Canada are
                        <br />
                        excited to try Rentwallex.</span>
                </div>
            </div>
            {/* <h1> 150+ Renters from across Canada are excited to try Rentwallex.</h1> */}
            <br /><br />
        </div>

    )
}
