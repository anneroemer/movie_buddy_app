import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import { useState } from "react";
import mapboxgl from "mapbox-gl";

//eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 55.7060378,
        longitude: 12.5142235,
        zoom: 16,
        width: "100vw",
        height: "100vh"
    });

    //vi kan style navigations knapperne ved at lave et object med nogle styles. 
    //Vi kunne også style directe på komponentet. 
    //nu vil det sidde i højre hjørne med lidt luft omkring
    const navigationControlStyle = {
        right: 16,
        top: 56
    }

    const geolocateControlStyle = {
        right: 16,
        top: 16
    }

    return ( 
        <ReactMapGL
        //i stedet for at skrive alle vores props, tager vi bare vores object og spreader det
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle="mapbox://styles/anneroemer/ckyiy8ej08bbn15pcsn8yrrwq"
        >
            <NavigationControl style={navigationControlStyle} />
            <GeolocateControl 
                style={geolocateControlStyle} 
                trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}
                auto
                />
            <Marker latitude={55.7060378} longitude={12.5142235}>
                <div style={{width: "1em", height: "1em", backgroundColor: "orange"}}></div>
            </Marker>
        </ReactMapGL>
     );
}
 
export default Map;