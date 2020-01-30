import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';


import './bottomnavbar.css';

class BottomNavbar extends Component {
  state = { }

  componentDidMount() {
    const pseudo = localStorage.getItem('pseudo');
    const mail = localStorage.getItem('mail');
    this.setState({ pseudo, mail })
  }

  render() {
    const { pseudo, mail } = this.state;
    let goProfile;

    if (pseudo === null && mail === null) {
      goProfile = (
      <NavLink to="/login">
        <AccountCircleRoundedIcon color="primary" fontSize="large" />
      </NavLink>
    )} else {
      goProfile = (
        <NavLink to="/profile">
        <AccountCircleRoundedIcon color="primary" fontSize="large" />
      </NavLink>
      )
    }

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
          {goProfile}
        </div>
      </div>
    );
  }
}


export default BottomNavbar;