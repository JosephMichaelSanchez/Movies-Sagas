import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieItem({ movie }) {

    const history = useHistory();
    const dispatch = useDispatch();


    // function to dispatch to watcher saga and push user to details page
    const getMovieDetails = () => {



        console.log(movie.id);
        // push user to details page
        history.push('/details');
        // dispatch to the watcher saga with id of movie clicked as payload
        dispatch({ type: 'GET_MOVIE_DETAILS', payload: movie.id })

    }
    return (
        <>
            {/* movies will display as cards. clicking the image will call the getMovieDetails function */}
            <card className="movieCard" key={movie.id} >
                <div className="movieTitle">
                    <h4>{movie.title}</h4>
                </div>
                <img onClick={getMovieDetails} src={movie.poster} alt={movie.title} />
            </card>
        </>

    )

};


export default MovieItem;