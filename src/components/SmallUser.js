/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from './Avatar';
import { Link } from "react-router-dom";
import { colors } from '../styles/colors';


const SmallUser = ({name, handle}) => {

    const style = css`
        width: 10rem;
        height: 6rem;
        margin: 1.6rem 0.2rem;
        background-color: ${colors.duskyPink};
        border-radius: 1rem;
        box-shadow: 4px 9px 25px 5px rgba(0,0,0,0.37);

        & .user-link {
            display: flex;
            flex-direction: column;
        }
        & .user-name {
            color: ${colors.deepBlue};
            font-size: 1rem;
        }
        & .user-handle {
            color: ${colors.deepBlue};
            font-size: 0.5rem;
        }
    `;

    return ( 
            <li css={style}>
                <Link to="#" className='user-link'>
                    <Avatar />
                    <h3 className='user-name'>{name}</h3>
                    <h4 className='user-handle'>{handle}</h4>
                </Link>
            </li>
     );
}
 
export default SmallUser;