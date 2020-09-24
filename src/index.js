import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import store from "./Redux/redux-store";
import StoreContext, {Provider} from "./StoreContext";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
});

