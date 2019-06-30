import React, { Component } from "react";
import Profile from "./Profile.js";
import Loader from "./../Loader/Loader.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, refreshText} from './../../redux/reducers/profile_reducer.js'
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    textMenu: state.profile.textMenu,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId
  }
}

let mapDispatchToProps = {
    refreshText,
    setUserProfile
}

class ProfileContainer extends Component {
    componentDidMount() {
      let f = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+userId)
          .then(response => {
              this.props.setUserProfile(response.data);
          });
      }
      let userId = this.props.match.params.userId;
      if (userId) {
        f();
      }
      else if (this.props.isAuth) {
        userId = this.props.authUserId;
        f();
      }
    }
    render() {
        return (
          <div>
              {this.props.profile
                ? <Profile profile={this.props.profile}/>
                : <Loader />}
          </div>
        );
    }
}

let WR = withRouter(ProfileContainer);

const ProfileComponent = connect(mapStateToProps,mapDispatchToProps)(WR);

export default ProfileComponent;
