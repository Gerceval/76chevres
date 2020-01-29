import React from 'react';
import { NavLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import './addquote.css';

function AddQuoteButton() {
  return (
    <NavLink to="/addquote">
      <Fab className="addquote-button" color="secondary">
        <AddIcon />
      </Fab>
    </NavLink>
  );
}


export default AddQuoteButton;