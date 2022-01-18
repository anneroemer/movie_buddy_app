/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Map from "../components/Map";
import { useEffect, useState } from 'react';
import axios from "axios";
import SmallUser from '../components/SmallUser';
import { colors } from '../styles/colors';
import { FaTimes } from "react-icons/fa";

const Home = () => {

    const [users, setUsers] = useState();
    const [visible, setVisible] = useState("block");

    useEffect(() => {
        axios(`/users.json`, {
        })
        .then((result) => {
            console.log(result.data)
            setUsers(result.data)
        });
    }, []);

    const style = css`

        & .users-container {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 400;
            overflow: scroll;
            background-color: ${colors.deepBlue};
            border-radius: 0 0 1rem 1rem;
            display: ${visible};
        }
        & .users-list {
            list-style: none;
            padding-left: 0;
            display: flex;
            overflow: scroll;
        }
        & .cross {
            color: ${colors.duskyPink};
        }
    `;

    return ( 
        <div css={style}>
            <div className='users-container'>
                <ul className='users-list'>
                    {users?.map((user, index) => (
                        <SmallUser key={index} name={user.name} handle={user.handle}/>
                        ))}
                </ul>
                <div onClick={!visible}>
                    <FaTimes className='cross' />
                </div>
            </div>
            <Map />
        </div>
     );
}
 
export default Home;