import MovieChoice from "./MovieChoice";
import { useState } from "react";

const Form = () => {

    // const handleChange = ({ currentTarget }) => {
    //     const { name, value } = currentTarget;
    //     setData(prevData => ({ ...prevData, [name]: value }));
    //   };
    
    const [userinfo, setUserinfo] = useState({name: "", handle: "", gender: "", bio: "", moviegenres: []});

    const handleSubmit = (e) => {
      e.preventDefault();
      setUserinfo({
        name: e.target.username.value, 
        handle: e.target.userhandle.value, 
        gender: e.target.gender.value, 
        bio: e.target.biotext.value,
        
      })
    }

    console.log(userinfo)

    return ( 
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" id="username" placeholder={userinfo.name} />
          <input type="text" name="userhandle" id="userhandle" placeholder={userinfo.userhandle} />
          <select className='select-gender' name="gender" id="gender" placeholder={userinfo.gender}>
              <option value="woman">Woman</option>
              <option value="man">Man</option>
              <option value="non-binary">Non-binary</option>
              <option value="other">Others</option>
          </select>
          <label htmlFor="">bio</label>
          <textarea className="text-area" name="biotext" rows="5" cols="36" placeholder={userinfo.biotext ? userinfo.biotext : "Write a short bio text here..."}/>
          <label htmlFor="">movie genres</label>
          <div className='movie-choice-container'>
              <MovieChoice genre="Sci-fi" />
              <MovieChoice genre="Romance" />
              <MovieChoice genre="Horror" />
              <MovieChoice genre="Drama" />
              <MovieChoice genre="Comedy" />
              <MovieChoice genre="Documentary" />
          </div> 
          <button type="submit">save</button>
        </form> 
     );
}
 
export default Form;