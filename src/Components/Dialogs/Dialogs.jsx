import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Chat/Messages";



const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} text={dialog.text} />);
    let messageElements = state.message.map(message => <Messages name={message.name} text={message.text} />);
    let newMessageBody = state.newMessageBody;
    // let newMessage = React.createRef();

    let onSendMessageClick = () =>{
        props.sendMessage();
        // props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) =>{
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrap}>
                {dialogsElements}
            </div>
            <div className={s.messageWrap}>
                {messageElements}

                <textarea  className={s.textArea}
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder={'Enter your message...'}
                    cols="55"
                    rows="5">
                </textarea>
                <button onClick={onSendMessageClick}
                    className={s.messageButton}>
                    Send Message
                </button>

            </div>
        </div>
    )
}


export default Dialogs;