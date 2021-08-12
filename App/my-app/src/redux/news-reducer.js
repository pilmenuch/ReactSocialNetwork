const ADD_NEWS_COMMENT = 'ADD_NEW_COMMENT';
const UPDATE_NEWS_COMMENT = 'UPDATE_COMMENT';

let initialState = {
    newsComment: [
        {id: 1, comment: "Cool"},
    ],
    newMessageBody: "Hi",

};

const newsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case ADD_NEWS_COMMENT:
            let comment = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: "",
                newsComment: [...state.newsComment, {id: 2, comment: comment}]
            };
            return stateCopy;
       
       
            case UPDATE_NEWS_COMMENT:
            stateCopy = {
                ...state, 
                newMessageBody: action.message
            };
            return stateCopy;

        default:
            return state;
    }
};

export const addNewComment = () => ({type: ADD_NEWS_COMMENT});
export const updateNewsComment = (text) =>
    ({type: UPDATE_NEWS_COMMENT, message: text});

export default newsReducer;
