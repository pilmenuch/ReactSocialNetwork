import React from "react";
import s from "./UsersModule/Users.module.css";
import {Pagination, Button} from 'antd';
import avatar from '../../Assets/avatar.png'
import {NavLink} from 'react-router-dom';
import axios from "axios";


let Users = (props) => {


    return (
        <div>


            <div>
                <Pagination showQuickJumper defaultCurrent={props.currentPage} total={props.totalUsersCount}
                            onChange={props.setPage}/>
            </div>
            {props.users.map(u => <div className={s.border}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt="avatar" src={u.photos.small != null ? u.photos.small : avatar} className={s.avatar}/>
                    </NavLink>
                </div>
                <div>{u.name}</div>
                <div>{u.id}</div>
                <div>City: {u.city}</div>
                <div>
                    {u.followed ? <Button type="primary" onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {"API-KEY": "299b1286-1e61-4ab0-9e11-690b2bb84237"}
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }

                                })
                        }}>Unfollow</Button> :
                        <Button type="primary" onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {"API-KEY": "299b1286-1e61-4ab0-9e11-690b2bb84237"}
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }

                                })
                        }}>Follow</Button>}
                </div>


            </div>)}

        </div>

    )

};


export default Users;
