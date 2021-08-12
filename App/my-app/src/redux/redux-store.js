import {combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers=combineReducers({
    newsPage:newsReducer,
    usersPage:usersReducer,
    profilePage:profileReducer,
    auth:authReducer
});


let store=createStore(reducers);
window.store=store;

export default store;