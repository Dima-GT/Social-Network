import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = (props) => {
    let postsElements = props.posts.map(post => <Post text={post.text}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => { props.addPost();}
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
    <div className={s.posts}>
        <div className={s.new_post}>
            <h3 className={s.title}>
                My Posts
            </h3>
            <textarea onChange={onPostChange}
                      className={s.text_area}
                      ref={newPostElement}
                      cols="90"
                      rows="3"
                      placeholder='your news...'
                      value={props.newPostText}>
            </textarea>
            <div className={s.post_btn_wrapper}>
                <button className={s.post_btn} onClick={onAddPost}>
                    Add Post
                </button>
            </div>
        </div>
        {postsElements}
    </div>
    )
}

export default Posts;