import React from 'react'
import mappage_banner from '../../assets/mappage_banner.jpg'

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
            <img src={mappage_banner} alt="Map page banner" />
            <div className='mapPageTopBanner'>
                {/* <div className='left'>
                    <span>150+</span>
                </div> */}
                <div className='right'>
                    <span>Renters from across Canada are
                        {/* <br /> */}
                        excited to try Rentwallex.</span>
                </div>
            </div>
            {/* <h1> 150+ Renters from across Canada are excited to try Rentwallex.</h1> */}
            <br /><br />
        </div>

    )
}
