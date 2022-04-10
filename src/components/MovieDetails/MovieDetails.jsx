import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import ReactPlayer to embed movie trailers
import ReactPlayer from 'react-player'

function MovieDetails() {

    const history = useHistory();

    const movie = useSelector(store => store.detailsReducer)

    const genres = useSelector(store => store.genres)

    console.log(genres);

    // function to push the user to the MovieList page on button-click
    const backToList = () => {
        console.log('clicked');
        history.push('/');

    }

    console.log(genres);

    return (
        <>
            <div id="selectedMovie">
                {/* name of movie */}
                <h2>{movie.title}</h2>
                {/* div containing embedded movie trailer and movie poster */}
                <div className="trailerAndPoster">
                    <ReactPlayer url={movie.trailer} /> <img className="poster" src={movie.poster} alt={movie.title} />
                </div>
                <div>
                    {/* movie description */}
                    <p>{movie.description}</p>

                    <ul>
                        {/* loop through movie's genres and list them */}
                        {genres.map((genre, i) => (
                            <p key={i} className="genreList">{genre.name}</p>
                        ))}
                    </ul>
                </div>
                {/* button to call function to push user back to MovieList*/}
                <button className="backButton" onClick={backToList}>BACK TO LIST</button>
            </div>
            <div>
            </div>

        </>
    )


}


export default MovieDetails;

