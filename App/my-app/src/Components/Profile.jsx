import React from "react";
import s from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import {Button, Input} from "antd";
import Preloader from "../Common/Preloader";
import avatar from "../Assets/avatar.png";

const Profile = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }
    let posts = props.profilePage.posts.map(p => <div><img alt="profile" src={props.profilePage.profile.photos.small
        ? props.profilePage.profile.photos.small : avatar}
                                                           className={s.avatar}/> {p.post}</div>);
    return (
        <div>
            <div>
                <NavLink to="/profile"><img alt="avatar"
                                            src={props.profile.photos.small ? props.profilePage.profile.photos.small : avatar}
                                            className={s.avatar}/> </NavLink>
            </div>
            <div>
                {posts}
            </div>
            <div>
                <Input rows={4} size="large" value={props.profilePage.postBody} onPressEnter={() => props.addPost()}
                       onChange={(e) => props.updatePost(e.target.value)}/>
                <Button type="primary" onClick={() => props.addPost()}>Add comment</Button>
            </div>
        </div>
    )

};

export default Profile;