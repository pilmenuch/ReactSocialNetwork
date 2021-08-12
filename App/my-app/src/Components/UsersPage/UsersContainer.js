import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsFetching} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {compose} from "redux";
import Preloader from "../../Common/Preloader";
import {userAPI} from "../../Api/Api";


class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }


    setPage = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data=> {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            })
    };

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users setPage={this.setPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
}))(UsersApiComponent);

