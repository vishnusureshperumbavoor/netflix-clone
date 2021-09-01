import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import {imageUrl,API_KEY} from '../../constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      const handleMovie = (id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
              if(response.data.results.length!=0){
                  setUrlId(response.data.results[0])
              }else{
                  console.log("Array empty");
              }
          })
      }

    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.tovino ? 'smallPoster' : "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="" />                
                )}
            </div>
            { urlId && <Youtube videoId={urlId.key} opts={opts}  /> }
        </div>
    )
}

export default Rowpost
