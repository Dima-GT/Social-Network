import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {text: 'Hello, how are you?'},
                {text: 'The weather is sunny'},
                {text: 'I go to training'}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: '0001', name: 'Dima', text: 'Hello, how are you?'},
                {id: '0002', name: 'Elizabeth', text: 'She said to stop.'},
                {id: '0003', name: 'Sofia', text: 'How much cost?'},
                {id: '0004', name: 'Oleg', text: 'lol, cool.'},
                {id: '0005', name: 'Alina', text: 'Good Bye!'}
            ],
            message: [
                {name: 'Dima', text: 'Hello'},
                {name: 'MyName', text: 'Hi, Whats app?'},
                {name: 'Dima', text: 'Good, you?'},
                {name: 'MyName', text: 'Nice, what are you doing?'}
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State Changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;