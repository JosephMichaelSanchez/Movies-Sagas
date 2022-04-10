import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // dispatch to watcher saga on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <div className="nowShowing">
                
            </div>
            <section className="movies">
                {/* loop through movies, pass them to the MovieItems as props */}
                {movies.map(movie => {
                    return (<MovieItem
                        key={movie.id}
                        movie={movie}

                    />);
                })}
            </section>
        </main>

    );
}

export default MovieList;