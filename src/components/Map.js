import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { colors } from '../styles/colors';
import { useEffect, useState } from 'react';
import axios from "axios";
import MapMarker from "./MapMarker";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';



//eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {

    const [users, setUsers] = useState();
    
    //const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        axios(`/users.json`, {
        })
        .then((result) => {
            //console.log(result.data)
            setUsers(result.data)
            //console.log(result.data[0].movieChoice)
        });
    }, []);

    // useEffect(() => {
    //     const movieGenres = ["horror", "drama"];
    //     const usersMovieChoice = users[0].movieChoice;
    //     console.log(usersMovieChoice)
    //     const filtered_users = () => {
    //         let result = usersMovieChoice.filter(item =>  usersMovieChoice.includes(movieGenres))        
    //         console.log(result)
    //     }
    //     //filtered_users()
    //     //setFilteredUsers(filtered_users)
    // }, [filteredUsers, users]);


    const [viewport, setViewport] = useState({
        //latitude: 55.70004201041317,
        //longitude: 12.544032180774238,
        zoom: 16,
        width: "100vw",
        height: "100vh"
    });

    const [loading, setLoading] = useState(true);

    const navigationControlStyle = {
        right: 16,
        bottom: 80,
        backgroundColor: `${colors.duskyPink}`,
    }

    const geolocateControlStyle = {
        right: 16,
        bottom: 180
    }
    const style = css`
        z-index: 2000;
        position: absolute;
        top: 40%;
        left: 40%;
        height: 5rem;
        width: 5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        & .spinner {
            width: 100%;
        }
        & .loading {
            background-color: ${colors.deepBlue};
            width: 6rem;
            color: ${colors.duskyPink};
            font-size: 0.7rem;
            border-radius: 1000px;
        }
    `;


    return (    
        <> 
        {loading && 
            <div css={style}>
                <div>
                    <img src="/mb-logo-192.PNG" alt="spinner" className="spinner" />
                </div>
                <div className="loading">
                    <p >Loading map...</p>
                </div>
            </div> }
        <ReactMapGL
        //i stedet for at skrive alle vores props, tager vi bare vores object og spreader det
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle="mapbox://styles/anneroemer/ckyiy8ej08bbn15pcsn8yrrwq"
            onLoad={() => setLoading(false)}
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
                    <MapMarker key={index} name={user?.name} latitude={user?.latitude} longitude={user?.longitude} handle={user?.handle} />
                    ))}
        </ReactMapGL>
        </>
     );
}
 
export default Map;