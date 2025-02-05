import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { userReducer } from "./userSlice";
import { basketNumReducer } from "./basketNumSlice";
import { basketArrReducer } from "./baskerArrSlice";


const rootReducer =combineReducers({
    user: userReducer,
    basketNum:basketNumReducer,
    basketArr:basketArrReducer,
})

const persistConfig= {
    key :'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store =configureStore({
    reducer:persistedReducer
})

const persistor=persistStore(store);

export {store,persistor}
