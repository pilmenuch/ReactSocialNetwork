import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux"




/*let observer = (state) => {*/
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


/*};

observer(store.getState());
store.subscribe(()=>{
    let state=store.getState();
    observer(state)
    }
);*/









