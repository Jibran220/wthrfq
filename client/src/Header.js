import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import CustomToggle from './dropdowns'
import { bindActionCreators } from "redux"
import { Link, useNavigate, useLocation } from 'react-router-dom';



import useStyles from './styless';
// store
// import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../../../../../../../store/setting/setting'
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        // darkMode: getDarkMode(state),
        // schemeDirMode: getDirMode(state),
        // sidebarcolorMode: getSidebarColorMode(state),
        // sidebarTypeMode: getSidebarTypeMode(state),
        // sidebaractivestyleMode: getSidebarActiveMode(state),
        // navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            // ModeAction,
            // SchemeDirAction,
            // SidebarColorAction,
            // SidebarActiveStyleAction,
            // NavbarstyleAction,
        },
        dispatch
    )
})


const Header = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
    const location = useLocation();
      const classes = useStyles();
  const history = useNavigate();
 
    const logout = () => {
    // dispatch({ type: actionType.LOGOUT });

    // history.push('/');

    // setUser(null);
  };

    useEffect(() => {
         const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

        setUser(JSON.parse(localStorage.getItem('profile')));
        



        // navbarstylemode
        const navbarstyleMode1 = sessionStorage.getItem('Navbarstyle-mode');
        if (navbarstyleMode1 === null) {
            //  props.NavbarstyleAction(props.navbarstylemode);
        }
        else {
            //  props.NavbarstyleAction(navbarstyleMode1);
        }
    },[location])
    const minisidebar = () => {
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }

    return (
        <>
            <Navbar expand="lg" variant="light" className="nav iq-navbar">
                <Container fluid className="navbar-inner">
                    <Link to="/" className="navbar-brand">
                       
                        <h4 className="logo-title">Hope UI</h4>
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                        <i className="icon">
                            <svg width="20px" height="20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                            </svg>
                        </i>
                    </div>
                    <div className="input-group search-input">
                        <span className="input-group-text" id="search-input">
                            <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <input type="search" className="form-control" placeholder="Search..." />
                    </div>
                 
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="mb-2 ms-auto navbar-list mb-lg-0">
                         
                         
                         
                                 {user?.result ? (
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as={CustomToggle} variant=" nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <img src={user?.result.name.charAt(0)}className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded" /> */}
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                     <div className="caption ms-3 d-none d-md-block ">
                                        <h6 className="mb-0 caption-title">Welcome { user?.result.name}</h6>
                                    </div>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                                </Dropdown.Toggle>
          <div className={classes.profile}>
            {/* <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography> */}
          </div>
                            </Dropdown>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
