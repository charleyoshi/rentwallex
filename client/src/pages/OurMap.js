import React, { useEffect, useRef, useState } from 'react'
import '../styles/ourMap.css';
import Navbar from '../components/Navbar'
import MapPageTopBanner from '../components/OurMapPage/MapPageTopBanner'
import RentItem from '../components/OurMapPage/RentItem';
import Map from '../components/OurMapPage/Map';
import axios from 'axios';
import ButtonSmallRound from '../components/ButtonSmallRound';
import { staticRentItems } from '../helpers/staticRentItems';


export default function OurMap() {
    const [items, setItems] = useState([])
    const [isShowingDetail, setIsShowingDetail] = useState(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState()

    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)

    useEffect(() => {
        axios.get('https://rentwallex-server.onrender.com/api/waitlist')
            .then(function (response) {
                // handle success
                setItems(Object.values(response.data.result))
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
                if (error.code === "ERR_NETWORK") {
                    // Database malfunction. Display static, fake data
                    console.log("Network Error...")
                    setItems(staticRentItems)
                }
            })
    }, [])

    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
    }

    const onClickOneItem = (item, index) => {
        console.log('This is ->', index)
        setSelectedItemIndex(index)
        showOneItem(item)
        focusMap(item)

    }

    const showOneItem = (item) => {
        setIsShowingDetail(true)
    }

    const backToAllItems = () => {
        setIsShowingDetail(false)
    }

    const focusMap = (item) => {
        // inside the map instance you can call any google maps method
        // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
        mapRef.current.setCenter({ lat: parseFloat(item.lat), lng: parseFloat(item.lng) })
        mapRef.current.setZoom(mapRef.current.getZoom() + 1)
    }

    const handlePinHover = (index) => {
        console.log("hovering..." + index)
        // highlight the corresponding rentItem

    }

    return (
        <div className='ourMap'>
            <Navbar />
            <MapPageTopBanner />

            <div className='mapContentWrapper'>
                <div className='left'>
                    <div className='title'> {isShowingDetail ? "RENT(S) AT THIS ADDRESS" : "RENT(S) NEAR YOU"}</div>
                    {isShowingDetail &&
                        <div onClick={backToAllItems}>
                            <ButtonSmallRound symbol="arrow_back" />
                        </div>
                    }
                    {items.map((item, index) => (
                        (!isShowingDetail || selectedItemIndex === index) &&
                        <RentItem key={index} item={item} show={onClickOneItem} id={index} isDetail={isShowingDetail} />
                    ))}
                </div>
                <div className="right">
                    <Map onGoogleApiLoaded={onGoogleApiLoaded} coordinates={items} updateMap={onClickOneItem} handlePinHover={handlePinHover} />
                </div>
            </div>
        </div>
    )
}
