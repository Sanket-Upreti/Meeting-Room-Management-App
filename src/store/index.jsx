import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import userRegisteredReducer from "./slices/user.slice.jsx";

export const createStore = (options) => {
    return configureStore({
        reducer: {
            storeUser: userRegisteredReducer,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
        ...options,
    });
};

const store = createStore();
export default store;
