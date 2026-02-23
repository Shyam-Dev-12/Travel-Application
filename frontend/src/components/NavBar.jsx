import React, { useEffect }   from "react";

import '../App.css'

        // Boostrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

        // Screens
import { HomeScreen } from '../screens/HomeScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { ContactScreen } from '../screens/ContactScreen'
import { PackageScreen } from '../screens/PackageScreen'

        // React Router Dom
import { useNavigate } from "react-router-dom";

        // Redux
import { useDispatch, useSelector } from "react-redux";

        // Slice
import { logout } from "../slices/authSlice";

export const NavBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  Get logged-in user info from Redux store
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // go to home after logout
  };


useEffect(() => {
  const nav = document.getElementById("nav");
  const navItems = document.querySelector(".nav-items");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      nav.classList.add("nav-bg-white");
      navItems.classList.add("nav-text-dark");

    } else {
      nav.classList.remove("nav-bg-white");
      navItems.classList.remove("nav-text-dark");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
 
  return (
    <Navbar id="nav" expand="md" className=" py-3 fixed-top navbar-dark-overlay">
      <Container fluid className="mx-5 px-5">
        {/* Brand */}
      <Navbar.Brand className="d-flex flex-column align-items-center">

        {/* Dice letters */}
        <div className="d-flex gap-1">
          {["S", "K", "W", "I", "N", "G"].map((char, index) => (
            <span
              key={index}
              className="dice-letter border-1 border-white rounded-1 bg-white  fw-bolder d-flex justify-content-center align-items-center"
              style={{
                width: "25px",
                height: "25px",
                fontSize: "14px",
              }}
            >
              {char}
            </span>
          ))}
        </div>
        {/* Subtext */}
        <span className="mt-1 fw-semibold text-info" style={{fontSize:"13px", letterSpacing:"2px"}}>
          TRAVELS
        </span>

      </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links + Button or Username */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center fs-6 fw-bold nav-items">
            <Nav.Link className="nav-underline nav-active" onClick={() => navigate("/")}> Home </Nav.Link>
            <Nav.Link className="nav-underline" onClick={() => navigate("/about")}> About Us </Nav.Link>
            <Nav.Link className="nav-underline" onClick={() => navigate("/contact")}> Contact </Nav.Link>
            <Nav.Link className="nav-underline" onClick={() => navigate("/packages")}> Package </Nav.Link>

            {/* If logged in → show dropdown with name/email/logout */}
            {userInfo ? (
              <NavDropdown title={<span className="fw-bold text-primary">{userInfo.name}</span>}
                id="user-dropdown" align="end">
                <NavDropdown.ItemText className="fw-semibold text-secondary">
                 {userInfo.email}
                </NavDropdown.ItemText>
                <NavDropdown.Divider />
                <div className="mx-2">
                  <NavDropdown.Item onClick={handleLogout} className="text-center text-white bg-danger rounded-1 fw-semibold">
                    LOGOUT
                  </NavDropdown.Item>
                </div>

              </NavDropdown>
            ) : (
              <Button onClick={() => navigate("/login")} variant="info" className="ms-md-3 fw-bold fs-6">
                SIGN IN
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
