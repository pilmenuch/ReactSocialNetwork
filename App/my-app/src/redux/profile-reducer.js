const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_IS_FETCHING='SET_IS_FETCHING';
const SET_PROFILE='SET_PROFILE';


let initialState = {
    posts: [{id:1,post:"hello!!!!!"}],
    postBody: '',
    isFetching:false,
    profile:null
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: 2, post: state.postBody}], postBody: ''};

        case
        UPDATE_POST:
            return {...state, postBody: action.post};

        case
        SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case
        SET_PROFILE:
            return {...state, profile: action.data};

        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updatePost = (post) => ({type: UPDATE_POST, post});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setProfile = (data) => ({type: SET_PROFILE, data});


export default profileReducer;