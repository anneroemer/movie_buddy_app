/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from '../components/Avatar';
import { colors } from '../styles/colors';
import { motion } from "framer-motion";
import MovieChoice from '../components/MovieChoice';

const MyProfile = () => {

    const style = css`
        background-color: ${colors.duskyPink};
        height: 100vh;
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        max-width: 100vw;
        position: relative;
        top: 15rem;
        text-align: start;

        & .profile-content {
            padding: 0 1.5rem 1.5rem;
        }

        & .top {
            display: flex;
            justify-content: center;
        }

        & .movie-choice-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            grid-gap: 1rem;
        }
        & .profile-name {
            color: ${colors.deepBlue};
            margin:0;
        }
        & .profile-handle {
            color: ${colors.deepBlue};
            font-size: 0.6rem;
            margin: 0 0 1rem;
        }
        /* & .movie-choice {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-width: 6rem;
            background-color: ${colors.deepBlue};
            border-radius: 1000px;
            padding: 0 0.1rem;
            color: ${colors.duskyPink};
        }
        input[type=checkbox] {
            opacity: 0;
        } */

    `;

    return ( 
        <>
            <motion.div animate={{y:-150}}>
                <div css={style}>
                    <div className='top'>
                        <Avatar />
                    </div>
                    <div className='profile-content'>
                        <h2 className='profile-name'>Hi Jane Doe</h2>
                        <p className='profile-handle'>@janedoe</p>
                        <select name="gender" id="gender">
                            <option value="woman">Woman</option>
                            <option value="man">Man</option>
                            <option value="non-binary">Non-binary</option>
                            <option value="other">Others</option>
                        </select>
                        <h4>Bio</h4>
                        <textarea name="bio-text" rows="5" cols="40" placeholder='Write a short bio text here...'/>
                        <h4>Movie genres</h4>
                        <div className='movie-choice-container'>
                            <MovieChoice genre="Sci-fi" />
                            <MovieChoice genre="Romance" />
                            <MovieChoice genre="Horror" />
                            <MovieChoice genre="Drama" />
                            <MovieChoice genre="Comedy" />
                            <MovieChoice genre="Documentary" />
                        </div> 
                    </div>     
                </div>
            </motion.div>
        </>
     );
}
 
export default MyProfile;