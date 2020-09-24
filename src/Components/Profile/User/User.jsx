import React from "react";
import s from './User.module.css'
import Posts from "../MyPosts/Posts";
import UserInfo from "./User-info/User-info";
import {updateNewPostText} from "../../../Redux/store";
import PostsContainer from "../MyPosts/PostsContainer";



const User = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.user_img}>
                <img src="https://pbs.twimg.com/media/D8r-PBWWsAEXTfK.jpg" alt=""/>
            </div>
            <UserInfo name={'John Week'}
                      birthday={'8 january'}
                      city={'Kolomya'}
                      education={'IFNTUOG'}
                      web={'web-site.com'}
            />
            <PostsContainer/>
        </div>
    )
}

export default User;