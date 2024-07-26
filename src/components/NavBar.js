import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const loggedIn = <>{currentUser?.username}</>;
  const loggedOut = (
    <>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin">
        SIGNIN
      </NavLink>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup">
        SIGNUP
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
            <Navbar.Brand>
            ALBUMTALK
            </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink 
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/albums">
              THEALBUMS
            </NavLink>
            <NavLink 
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/reviews">
              THEREVIEWS
            </NavLink>
            {currentUser? loggedIn : loggedOut}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;