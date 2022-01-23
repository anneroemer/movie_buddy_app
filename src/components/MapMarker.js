import { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { colors } from '../styles/colors';
import { motion } from "framer-motion";



const MapMarker = ({ latitude, longitude, name, handle }) => {

    const [isVisible, setIsVisible] = useState(false);

    const style = css`
        position: relative;

    & .marker {
        width: 2rem;
        height: 2rem;
        color: ${colors.orangeRed};
        font-size: 2.5rem;
    }
    & .marker-shadow {
        width: 1rem;
        height: 0.5rem;
        border-radius: 50%;
        position: relative;
        top: -0.7rem;
        left: 0.75rem;
        background-color: rgba(0,0,0,0.20);
        box-shadow: 1px 0px 25px 10px rgba(0,0,0,0.37);

    }

    & .user-link-elm {
            position: absolute;
            top: -5.7rem;
            left: 1rem;
            background-color: ${colors.deepBlue};
            height: 2rem;
            min-width: 4rem;
            color: ${colors.duskyPink};
            font-size: 0.8rem;
            padding: 0.6rem;
            border-radius: 1rem;
            box-shadow: 4px 9px 25px 5px rgba(0,0,0,0.30);
            text-align: center;
            display: flex;
            align-items: center;
        }
    `;

    return ( 
        <Marker latitude={latitude} longitude={longitude} css={style}>
            <div className="marker" onClick={() => {
                setIsVisible(!isVisible);
            }} >
                <FaMapMarkerAlt className="marker-icon" />
                <div className="marker-shadow"></div>
                {isVisible && <motion.div animate={{y:-10}}><Link to={handle} >
                    <div className="user-link-elm">{name}</div></Link></motion.div>}
            </div>
        </Marker>
     );
}
 
export default MapMarker;