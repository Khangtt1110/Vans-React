import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import likeReducer from './like';
// import screenSizeReducer from './screenSize';

export default configureStore({
    reducer: {
        counter: counterReducer,
        like: likeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
