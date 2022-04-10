import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();

    const movie = useSelector(store => store.detailsReducer)

    const genres = useSelector(store => store.genres)

    console.log(genres);

    const backToList = () => {
        console.log('clicked');
        history.push('/');

    }

    console.log(genres);

    return (
        <>
            <div id="selectedMovie">
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>

            <ul>
                {genres.map((genre, i) => (
                    <li key={i}>{genre.name}</li>
                ))}
            </ul>
            <button className="backButton" onClick={backToList}>BACK TO LIST</button>
            </div>
        </>
    )


}


export default MovieDetails;

