import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import { useState } from "react";
import mapboxgl from "mapbox-gl";
import { colors } from '../styles/colors';
import { FaMapMarkerAlt } from "react-icons/fa";

//eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {

    //55.70004201041317, 12.544032180774238

    const [viewport, setViewport] = useState({
        latitude: 55.70004201041317,
        longitude: 12.544032180774238,
        zoom: 16,
        width: "100vw",
        height: "100vh"
    });

    //vi kan style navigations knapperne ved at lave et object med nogle styles. 
    //Vi kunne også style directe på komponentet. 
    //nu vil det sidde i højre hjørne med lidt luft omkring
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
            <Marker latitude={55.70004201041317} longitude={12.544032180774238}>
                <div style={{width: "2rem", height: "2rem", color: `${colors.orangeRed}`, fontSize: "2.5rem"}}>
                    <FaMapMarkerAlt />
                </div>
            </Marker>
        </ReactMapGL>
     );
}
 
export default Map;