const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching:action.isFetching,
                isAuth:true
            };
        default:
            return state;
    }
};

export const setUserData = (id, email,login) => ({type: SET_USER_DATA, data:{id, email,login}});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});


export default authReducer;
