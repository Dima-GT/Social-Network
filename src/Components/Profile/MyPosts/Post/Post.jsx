import React from "react";
import s from "./Post.module.css"

const Post  = (props) => {
    return (
        <div className={s.post}>
            <div className={s.img}></div>
            <span className={s.post_text}>
                {props.text}
            </span>
        </div>
    )
}

export default Post;