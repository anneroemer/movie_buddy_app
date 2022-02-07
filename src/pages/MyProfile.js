/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from '../components/Avatar';
import { colors } from '../styles/colors';
import { motion } from "framer-motion";
import MovieChoice from '../components/MovieChoice';
import { useContext } from 'react';
import { UserContext } from "../contexts/MyUserContext";


const MyProfile = () => {

    const { handleUserInfo, userinfo } = useContext(UserContext);
    
    console.log(userinfo)

    const handleSubmit = (e) => {
      e.preventDefault();
      handleUserInfo(e.target.username.value, e.target.userhandle.value, e.target.gender.value, e.target.biotext.value)
        // localStorage.setItem("userinfo", JSON.stringify(userinfo))
    }


    const style = css`
        background-color: ${colors.duskyPink};
        height: 100vh;
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        max-width: 100vw;
        position: relative;
        top: 15rem;
        text-align: start;
        box-shadow: 4px 9px 25px 5px rgba(0,0,0,0.70);


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
        & .text-area {
            appearance: none;
            background-color: ${colors.lightPink};
            color: ${colors.deepBlue};
            border: none;
            border-radius: 1rem;
            padding: 0.5rem;
            font-size: 0.8rem;
            resize: none;
        }
        & .text-area::placeholder {
            appearance: none;
            font-family: inter, sans-serif;
            color: ${colors.deepBlue};

        }
        & .select-gender {
            appearance: none;
            user-select: none;
            color: ${colors.deepBlue};
            background-color: ${colors.lightPink};
            width: 10rem;
            border: none;
            padding: 0.5rem;
            border-radius: 1rem;
        }

    `;

    return ( 
        <>
            <motion.div animate={{y:-150}}>
                <form onSubmit={handleSubmit} css={style}>
                    <div className='top'>
                        <Avatar />
                    </div>
                    <div className='profile-content'>
                        {/* <h2 className='profile-name'>hi Jane Doe</h2> */}
                        <input className='profile-name' type="text" name="username" id="username" placeholder={"hi " + userinfo.name} />
                        {/* <p className='profile-handle'>@janedoe</p> */}
                        <input className='profile-handle' type="text" name="userhandle" id="userhandle" placeholder={"@" + userinfo.userhandle} />
                        <select className='select-gender' name="gender" id="gender" placeholder={userinfo.gender}>
                            <option value="woman">Woman</option>
                            <option value="man">Man</option>
                            <option value="non-binary">Non-binary</option>
                            <option value="other">Others</option>
                        </select>
                        <h4>bio</h4>
                        <textarea className="text-area" name="biotext" rows="5" cols="36" placeholder={userinfo.biotext ? userinfo.biotext : "Write a short bio text here..."}/>
                        <h4>movie genres</h4>
                        <div className='movie-choice-container'>
                            <MovieChoice genre="Sci-fi" />
                            <MovieChoice genre="Romance" />
                            <MovieChoice genre="Horror" />
                            <MovieChoice genre="Drama" />
                            <MovieChoice genre="Comedy" />
                            <MovieChoice genre="Documentary" />
                        </div> 
                    </div>
                    <button type="submit">save</button> 
                </form>
            </motion.div>
        </>
     );
}
 
export default MyProfile;