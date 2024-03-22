import React, { useEffect, useState } from 'react'
import '../styles/ourMap.css';
import Navbar from '../components/Navbar'
import MapPageTopBanner from '../components/OurMapPage/MapPageTopBanner'
import RentItem from '../components/OurMapPage/RentItem';
import Map from '../components/OurMapPage/Map';
import axios from 'axios';


export default function OurMap() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/waitlist')
            .then(function (response) {
                // handle success
                setItems(Object.values(response.data.result))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <div className='ourMap'>
            <Navbar />
            <MapPageTopBanner />

            <div className='mapContentWrapper'>
                <div className='left'>
                    <div className='title'>RENT(S) NEAR YOU</div>

                    {items.map((item, index) => (
                        <RentItem key={index} item={item} />
                    ))}

                </div>
                <div className="right">
                    <Map coordinates={items} />
                </div>
            </div>
        </div>
    )
}
