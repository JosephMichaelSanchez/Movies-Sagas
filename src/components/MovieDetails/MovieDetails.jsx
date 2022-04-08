import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();

    const backToList = () => {
        console.log('clicked');
        history.push('/');

    }

    

    return (
        <>
            <h2>Movie Details Page</h2>

            <button onClick={backToList}>BACK TO LIST</button>
        </>
    )


}


export default MovieDetails;