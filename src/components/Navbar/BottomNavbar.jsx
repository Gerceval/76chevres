import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';


import './bottomnavbar.css';

class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottom-navbar">
        <div className="bottom-navbar-useless">
          <NavLink to="/">
            <VisibilityRoundedIcon color="primary" fontSize="large" />
          </NavLink>
        </div>
        <div className="bottom-navbar-homepage">
          <NavLink to="/">
            <HomeRoundedIcon color="primary" fontSize="large" />
          </NavLink>
        </div>
        <div className="bottom-navbar-profile">
          <NavLink to="/createprofile">
            <AccountCircleRoundedIcon color="primary" fontSize="large" />
          </NavLink>
        </div>
      </div>
    );
  }
}


export default BottomNavbar;