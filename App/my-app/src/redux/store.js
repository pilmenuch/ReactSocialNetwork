/*
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";




let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Petya"},
                {id: 3, name: "Vano"},
                {id: 4, name: "Valera"},
                {id: 5, name: "Pilmenuch"}

            ],
            messages: [
                {id: 1, msg: "Hi"},
                {id: 1, msg: "YoYo"},
                {id: 1, msg: "Yo"},
                {id: 1, msg: "HiHi"},
                {id: 1, msg: "..."},
            ],
            newMessageBody: ""

        },
        newsPage: {
            newsComment: [
                {id: 1, comment: "Cool"},
            ],
            newMessageBody: "Hi",

        }
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log();
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.newsPage=newsReducer(this._state.newsPage,action);
        this._callSubscriber(this._state);

    }


}




export default store;*/
