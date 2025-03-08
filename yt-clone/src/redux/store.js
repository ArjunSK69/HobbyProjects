import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth.reducer';
import { homeVideoReducer } from './reducers/video.reducer';



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideoReducer
})



const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
