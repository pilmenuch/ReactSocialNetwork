import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setIsFetching, setUserData} from '../../redux/auth-reducer';
import axios from "axios";
import Preloader from "../../Common/Preloader";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login)
                }
                this.props.setIsFetching(false);

            });


    }


    render() {

        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Header isAuth={this.props.isAuth}/>
        </>


    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, {setUserData, setIsFetching})(HeaderContainer);