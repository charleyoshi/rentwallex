import React from 'react'
import '../Css/ourMap.css';
import Navbar from '../components/Navbar'
import MapPageTopBanner from '../components/OurMapPage/MapPageTopBanner'
import RentItem from '../components/OurMapPage/RentItem';
import Map from '../components/OurMapPage/Map';





export default function OurMap() {
    return (
        <div className='ourMap'>
            <Navbar />
            <MapPageTopBanner />

            <div className='mapContentWrapper'>
                <div className='left'>
                    <div className='title'>RENT(S) NEAR YOU</div>
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                    <RentItem />
                </div>
                <div className="right">
                    <Map/>
                </div>
            </div>
        </div>
    )
}
