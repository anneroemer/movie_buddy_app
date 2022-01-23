/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
import { colors } from '../styles/colors';

const NoMatch = () => {

    const style = css`
        height: 100vh;
        padding: 5rem 1rem 1rem;
        color: ${colors.duskyPink};
        display: flex;
        flex-direction: column;
        align-items: center;

        & .mb-logo {
            height: 10rem;
            width: 10rem;
        }

        & .link-to-home {
            background-color: ${colors.duskyPink};
            width: 30%;
            border-radius: 0.8rem;

        }
        & .link-to-home-text {
            color: ${colors.deepBlue};
            font-size: 0.8rem;
        }
    `;

    return ( 
        <div css={style}>
            <h1>Ooops!</h1>
            <p>Ressource not found.</p>
            <img src="/mb-logo-512.png" alt="movie buddy logo" className='mb-logo'/>
            <Link to="/" className='link-to-home'>
                <p className='link-to-home-text'>Homepage</p>
            </Link>
        </div>
     );
}
 
export default NoMatch;