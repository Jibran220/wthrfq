import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import CustomToggle from './Dropdowns'
import { bindActionCreators } from "redux"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LOGOUT } from '../constants/actionTypes';

//img
import flag1 from '../../src/assets/images/Flag/flag-01.png'
import flag2 from '../../src/assets/images/Flag/flag-02.png'
import flag3 from '../../src/assets/images/Flag/flag-03.png'
import flag4 from '../../src/assets/images/Flag/flag-04.png'
import flag5 from '../../src/assets/images/Flag/flag-05.png'
import flag6 from '../../src/assets/images/Flag/flag-06.png'
import shapes1 from '../../src/assets/images/shapes/01.png'
import shapes2 from '../../src/assets/images/shapes/02.png'
import shapes3 from '../../src/assets/images/shapes/03.png'
import shapes4 from '../../src/assets/images/shapes/04.png'
import shapes5 from '../../src/assets/images/shapes/05.png'
import avatars1 from '../../src/assets/images/avatars/01.png'
import avatars2 from '../../src/assets/images/avatars/avtar_1.png'
import avatars3 from '../../src/assets/images/avatars/avtar_2.png'
import avatars4 from '../../src/assets/images/avatars/avtar_3.png'
import avatars5 from '../../src/assets/images/avatars/avtar_4.png'
import avatars6 from '../../src/assets/images/avatars/avtar_5.png'
// logo
import Logo from '../Logo'
import useStyles from './styles';
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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  const dispatch = useDispatch();
    const location = useLocation();
      const classes = useStyles();
  const history = useNavigate();
 
    const logout = () => {
//      dispatch({ type: actionType.LOGOUT });

    history('/authv');

  setUser(null);
  };

    useEffect(() => {
         const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

        setUser(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
        



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
                    <Link to="/dashboard" className="navbar-brand">
                        <Logo color={true} />
                        <h4 className="logo-title"></h4>
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
            <Avatar className={classes.purple} alt={user?.result.username} src={user?.result.imageUrl}>{user?.result.username.charAt(0)}</Avatar>
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
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign n</Button>
        )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
