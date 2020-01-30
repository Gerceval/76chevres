import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';


import './bottomnavbar.css';

class BottomNavbar extends Component {
  state = {}

  render() {
    let goProfile;
    const { isConnected } = this.props;

    if (isConnected === true) {
      goProfile = (
        <NavLink to="/profile">
          <AccountCircleRoundedIcon color="primary" fontSize="large" />
        </NavLink>
      )
    } else if (isConnected === false) {
      goProfile = (
        <NavLink to="/login">
          <AccountCircleRoundedIcon color="primary" fontSize="large" />
        </NavLink>
      )
    }

    return (
      <div className="bottom-navbar">
        <div className="bottom-navbar-useless">
          <NavLink to="/homepage">
            <VisibilityRoundedIcon color="primary" fontSize="large" />
          </NavLink>
        </div>
        <div className="bottom-navbar-homepage">
          <NavLink to="/homepage">
            <HomeRoundedIcon color="primary" fontSize="large" />
          </NavLink>
        </div>
        <div className="bottom-navbar-profile">
          {goProfile}
        </div>
      </div>
    );
  }
}


export default BottomNavbar;