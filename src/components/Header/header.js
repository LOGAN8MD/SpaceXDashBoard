import React from 'react';
import './header.css'
import logo from '../../asset/spacex.png';
import {
  AppBar,
  Toolbar,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    minHeight: '75px',
    alignItems: 'center',
  }
}));
function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBar} >
        <Toolbar edge="center">
          <img src={logo} className='spaceXLogo' alt='SpaceX' />
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;