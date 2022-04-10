import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player'

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
                <div className="trailerAndPoster">
                    <ReactPlayer url={movie.trailer} /> <img className="poster" src={movie.poster} alt={movie.title} />
                </div>
                <div>
                <p>{movie.description}</p>

                <ul>
                    {genres.map((genre, i) => (
                        <p key={i} className="genreList">{genre.name}</p>
                    ))}
                </ul>
                </div>
                <button className="backButton" onClick={backToList}>BACK TO LIST</button>
            </div>
            <div>
            </div>

        </>
    )


}


export default MovieDetails;

