import React from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const Admin = props => {
  const { adminLogged, handleSignOut } = props;
  return (
    <div className="admin-page-render">
      {adminLogged ?
        <>
          <h1>Super Espace Admin</h1>
          <Button onClick={handleSignOut}>Se déconnecter</Button>
        </>
        :
        <Redirect to="/homepage" />
      }
    </div>
  )
}

export default Admin;