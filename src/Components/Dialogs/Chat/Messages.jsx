import React from "react";
import s from './Messages.module.css'

const Messages = (props) => {
const isMine = props.name === 'MyName';
// console.log(isMine)
    return (
            <div className={s.messages  + ' ' + (isMine ?  s.isMine : '' )}>
                <div className={s.img}></div>
                <section className={s.message}>
                    <p className={s.text}>{props.text}</p>
                </section>
            </div>
    )
}


export default Messages;