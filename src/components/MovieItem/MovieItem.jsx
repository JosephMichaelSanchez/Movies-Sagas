import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieItem({ movie }) {

    const history = useHistory();
    const dispatch = useDispatch();



    const getMovieDetails = () => {

        // let theId = movie.id;

        console.log(movie.id);
        history.push('/details');
        dispatch({ type: 'GET_MOVIE_DETAILS', payload: movie.id })

    }
    return (
        <>
            <card className="movieCard" key={movie.id} >
                <h3>{movie.title}</h3>
                <img onClick={getMovieDetails} src={movie.poster} alt={movie.title} />
            </card>
        </>

    )

};


export default MovieItem;