import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';


function MovieItem({movie}) {

    const history = useHistory();

    

    const getMovieDetails = () => {
        console.log('clicked');
        history.push('/details');

        
    }
    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img onClick={getMovieDetails} src={movie.poster} alt={movie.title} />
            </div>
        </>

    )

};


export default MovieItem;