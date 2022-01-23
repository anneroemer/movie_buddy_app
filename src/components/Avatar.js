/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


import { BsPersonCircle } from "react-icons/bs";
import { colors } from '../styles/colors';

const Avatar = ({image}) => {

    const style = css`
        background-color: ${colors.duskyPink};
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid ${colors.duskyPink};
        position: relative;
        top: -1rem;
        z-index: 400;

        & .icon {
            color: ${colors.deepBlue};
            font-size: 3rem;
        }
        & .image {
            height: 4rem;
            width: 4rem;
            border-radius: 50%;
            object-fit: cover;
        }
    `;

    return ( 
        <div css={style}>
            {image ? <img src={image} className='image' alt="user avatar" /> : <BsPersonCircle className='icon'/> }
        </div>
     );
}
 
export default Avatar;