import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, setIsFetching, setProfile, updatePost} from "../redux/profile-reducer";

import axios from "axios";
import Preloader from "../Common/Preloader";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = 15769;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
            .then(response => {
                this.props.setProfile(response.data);
                debugger
            })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        isFetching: state.profilePage.isFetching,
        profile: state.profilePage.profile
    }
};

let ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {addPost, updatePost, setIsFetching, setProfile})(ProfileContainerWithRouter);