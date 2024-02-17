import React from 'react'
import '../Css/ourMap.css';
import Navbar from '../components/Navbar'
import MapPageTopBanner from '../components/OurMapPage/MapPageTopBanner'
import RentItem from '../components/OurMapPage/RentItem';
import SimpleMap from '../components/OurMapPage/GoogleMap';
import Map from '../components/OurMapPage/GoogleMap';





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
            {/* google maps API key: AIzaSyCNzb5Q_WOFQDs9bU5ljVwZPWTwDPxJ0Wg
            <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369104.466963324!2d-79.70701238697465!3d43.718265859952915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1707589962596!5m2!1sen!2sca"
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                />
                
            </div> */}
        </div>
    )
}
