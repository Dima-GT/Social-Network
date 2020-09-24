const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({name: 'Dima', text: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;