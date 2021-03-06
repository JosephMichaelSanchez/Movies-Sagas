import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    // call function to get the movies
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    // call function to get the details for a specific movie
    yield takeEvery('GET_MOVIE_DETAILS', movieDetailGetter);
    
};

// function to get details for a specific movie
function* movieDetailGetter(action) {
    const id = action.payload
    try {
        // get the details of the movie matching the id
        const movie = yield axios.get(`/api/movie/${id}`)
        // put results in detailsReducer
        yield put({type: 'SET_DETAILS', payload: movie})
    } catch {
        console.log('error getting details');
        
    }
    try {
        // get the genres of the movie matching the id
        const genres = yield axios.get(`/api/genre/${id}`)
        //  put the results in the genres reducer
        yield put({type: 'SET_GENRES', payload: genres})
    } catch {
        console.log('error getting genres');
        
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// holds the details of a specific movie 
const detailsReducer = ( state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload.data[0];
        default:
            return state;    
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload.data;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
