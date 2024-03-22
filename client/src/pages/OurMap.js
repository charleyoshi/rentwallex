import React, { useEffect, useRef, useState } from 'react'
import '../styles/ourMap.css';
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import MapPageTopBanner from '../components/OurMapPage/MapPageTopBanner'
import RentItem from '../components/OurMapPage/RentItem';
import Map from '../components/OurMapPage/Map';
import GoogleMap from 'google-maps-react-markers'
import axios from 'axios';
import ButtonSmallRound from '../components/ButtonSmallRound';


export default function OurMap() {
    const [items, setItems] = useState([])
    const [isShowingDetail, setIsShowingDetail] = useState(false)
    const [detail, setDetail] = useState()
    const [selectedItemIndex, setSelectedItemIndex] = useState()

    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)

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
        setDetail(item)
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
