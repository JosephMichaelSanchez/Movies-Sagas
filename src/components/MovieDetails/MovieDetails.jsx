import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();

    const movie = useSelector(store => store.detailsReducer)

    const backToList = () => {
        console.log('clicked');
        history.push('/');

    }

    console.log(movie);

    return (
        <>
            <h2>Movie Details Page</h2>
            <p>{movie.title}</p>

            <button onClick={backToList}>BACK TO LIST</button>
        </>
    )


}


export default MovieDetails;