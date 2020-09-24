import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>
            <div className={s.dialog}>
                <div className={s.img}></div>
                <section className={s.message}>
                    <h4 className={s.name}>{props.name} </h4>
                    <p className={s.text}>{props.text}</p>
                </section>
            </div>
        </NavLink>
    )
}


export default Dialog;