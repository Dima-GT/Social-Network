import React from "react";
import s from './Profile.module.css'
import User from "./User/User";
import {updateNewPostText} from "../../Redux/store";



const Profile = (props) => {
    return (
        <article className={s.mainProfile}>
            <div className={s.background}></div>
            <User/>
        </article>
    )
}


export default Profile;