import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.css';

function Header(props){
    return (
        <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              PUPS - R - US
            </Typography>
          </Toolbar>
        </AppBar>
        <ul className='header'>
          <li>
            <Link to='/cart'>Cart: ({props.count})</Link>
          </li>
        </ul>
        </>
    )
}
const mapStateToProps = (state) => ( {
  count: state.cart.total
})

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);