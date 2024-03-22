import GoogleMap from 'google-maps-react-markers'
import { useEffect, useRef, useState } from 'react'
import Pin from './Pin';
import React from 'react'


export default function Map(props) {
  const mapRef = useRef(null)
  const [mapReady, setMapReady] = useState(false)
 
  const coordinates = [
    { id: 1, title: "Round Pond", lat: 43.639, lng: -79.37729 },
    { id: 2, title: "The Long Water", lat: 43.642, lng: -79.3772 },
    { id: 3, title: "The Serpentine", lat: 43.63929, lng: -79.37729 }
  ];

  const points = props.coordinates
  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map
    setMapReady(true)
  }

  const onMarkerClick = (e, { markerId, lat, lng }) => {
    console.log('This is ->', markerId)

    // inside the map instance you can call any google maps method
    mapRef.current.setCenter({ lat, lng })
    // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
  }
  return (
    <GoogleMap
      apiKey="AIzaSyCNzb5Q_WOFQDs9bU5ljVwZPWTwDPxJ0Wg"
      defaultCenter={{ lat: 43.639, lng: -79.37729 }}
      defaultZoom={15}
      // options={mapOptions}
      mapMinHeight="100vh"
      onGoogleApiLoaded={onGoogleApiLoaded}
      // onChange={(map) => console.log('Map moved', map)}
    >
      {points.map(({ lat, lng, rentalCost }, index) => (
        <Pin
          key={index}
          lat={lat}
          lng={lng}
          text={index}
          tooltip={rentalCost}
        // onClick={onMarkerClick} // you need to manage this prop on your Marker component!
        // draggable={true}
        // onDragStart={(e, { latLng }) => {}}
        // onDrag={(e, { latLng }) => {}}
        // onDragEnd={(e, { latLng }) => {}}
        />
      ))}
    </GoogleMap>

  )
}
