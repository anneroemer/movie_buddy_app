import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { colors } from '../styles/colors';
import { useEffect, useState } from 'react';
import axios from "axios";
import MapMarker from "./MapMarker";


//eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {

    const [users, setUsers] = useState();
    // const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        axios(`/users.json`, {
        })
        .then((result) => {
            //console.log(result.data)
            setUsers(result.data)
        });
    }, []);

    // useEffect(() => {
    //     const movieGenres(["horror", ])
    //     const filtered_users = () => {
    //         users.filter()
    //     }
    // }, []);

    const [viewport, setViewport] = useState({
        latitude: 55.70004201041317,
        longitude: 12.544032180774238,
        zoom: 16,
        width: "100vw",
        height: "100vh"
    });

    const navigationControlStyle = {
        right: 16,
        bottom: 80,
        backgroundColor: `${colors.duskyPink}`,
    }

    const geolocateControlStyle = {
        right: 16,
        bottom: 180
    }


    return ( 
        <ReactMapGL
        //i stedet for at skrive alle vores props, tager vi bare vores object og spreader det
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle="mapbox://styles/anneroemer/ckyiy8ej08bbn15pcsn8yrrwq"
            sprite="mapbox://sprites/mapbox/bright-v8"
        >
            <NavigationControl style={navigationControlStyle} />
            <GeolocateControl 
                style={geolocateControlStyle} 
                trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}
                auto
                />
                {users?.map((user, index) => (
                    <MapMarker key={index} name={user?.name} latitude={user?.latitude} longitude={user?.longitude} handle={user?.handle}/>
                ))}
        </ReactMapGL>
     );
}
 
export default Map;