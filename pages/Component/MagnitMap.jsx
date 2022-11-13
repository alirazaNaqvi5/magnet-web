import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Map, { FullscreenControl } from 'react-map-gl';
import Marker from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import {NavigationControl, GeolocateControl} from 'react-map-gl';
const MagnitMap = (mapboxgl) => {
const [lng, setLng] = useState(53.4709);
const [lat, setLat] = useState(2.2153);
    return (
        <div >
            <Map
            
            mapboxAccessToken='pk.eyJ1IjoiYWxpcmF6YW5hcXZpIiwiYSI6ImNsMjA5aHViZTA3dzUzaW1tdm41aG42NjYifQ.O2o4P5-WHcHcYS_Fe1SLLQ'
            
            style={{
                zoom:1,
                scrollZoom: true,
                width:'600px',
                height:'300px',
                border:'1px solid gray',
                margin:'auto',
            }}
            initialViewState={{
                longitude: lng,
                latitude: lat,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9">
            <Marker
                Longiture = {lng}
                Latitude = {lat}
                />   
                <NavigationControl
                    position='bottom-right'/>
                <GeolocateControl/> 
                <FullscreenControl/>
            </Map>

            
        </div>
    )
}
export default MagnitMap;