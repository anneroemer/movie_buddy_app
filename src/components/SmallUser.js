/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
import { colors } from '../styles/colors';
import { FaMapMarkerAlt } from "react-icons/fa";


const SmallUser = ({name, handle}) => {

    const style = css`
        min-width: 8rem;
        padding: 0.8rem;
        height: 5rem;
        margin: 1.6rem 0.2rem;
        background-color: ${colors.duskyPink};
        border-radius: 1rem;
        box-shadow: 4px 9px 25px 5px rgba(0,0,0,0.37);
        text-align: start;

        & .user-link {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        & .user-name {
            color: ${colors.deepBlue};
            font-size: 1rem;
            word-break: break-word;
            margin:0;
        }
        & .user-handle {
            color: ${colors.deepBlue};
            font-size: 0.5rem;
        }
        & .location-marker {
            color: ${colors.orangeRed};
        }
    `;

    return ( 
            <li css={style}>
                <Link to={handle} className='user-link'>
                    <div>
                        <h3 className='user-name'>{name}</h3>
                        <h4 className='user-handle'>@{handle}</h4>
                    </div>
                    <FaMapMarkerAlt className='location-marker' />
                </Link>
            </li>
     );
}
 
export default SmallUser;