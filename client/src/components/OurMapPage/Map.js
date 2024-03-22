import GoogleMap from 'google-maps-react-markers'
import { useEffect, useRef, useState } from 'react'
import Pin from './Pin';
import React from 'react'


export default function Map(props) {
  const coordinates = props.coordinates

  return (
    <GoogleMap
      apiKey="AIzaSyCNzb5Q_WOFQDs9bU5ljVwZPWTwDPxJ0Wg"
      defaultCenter={{ lat: 43.639, lng: -79.37729 }}
      defaultZoom={15}
      // options={mapOptions}
      mapMinHeight="100vh"
      onGoogleApiLoaded={props.onGoogleApiLoaded}
    // onChange={(map) => console.log('Map moved', map)}
    >
      {coordinates.map((coordinate, index) => (
        <Pin
          key={index}
          coordinate={coordinate}
          lat={coordinate.lat}
          lng={coordinate.lng}
          text={index}
          tooltip={coordinate.rentalCost}
          handleClick={() => props.updateMap(coordinate, index)} // you need to manage this prop on your Marker component!
          handlePinHover={() => props.handlePinHover(index)}
        // draggable={true}
        // onDragStart={(e, { latLng }) => {}}
        // onDrag={(e, { latLng }) => {}}
        // onDragEnd={(e, { latLng }) => {}}
        />
      ))}
    </GoogleMap>

  )
}
