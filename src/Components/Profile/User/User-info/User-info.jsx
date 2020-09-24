import React from "react";
import s from './User-info.module.css'

const UserInfo = (props) => {
    return (
            <div className={s.user_info}>
                <ul>
                    <li><h3 className={s.name}>{props.name}</h3></li>
                    <li className={s.item}>{props.birthday}</li>
                    <li className={s.item}>{props.city}</li>
                    <li className={s.item}>{props.education}</li>
                    <li className={s.item}>{props.web}</li>
                </ul>
            </div>
    )
}

export default UserInfo;