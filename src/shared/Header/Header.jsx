import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provides/AuthProviders";
import './Header.css'
const Header = () => {
  const { user, logOut, photoURL } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="header-content" variant="white">
        <Container>
          <Navbar.Brand className="fw-bold mb-2 text-uppercase" href="/">
            Chef Hut
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginRight: "35px",
                }}
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/blog"
                activeClassName="active"
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "30px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "8px",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={user.photoURL}
                        alt="User"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      {isHovered && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            background: "rgba(255, 255, 255, 0)",
                            color: "black",
                            padding: "4px",
                            textAlign: "center",
                            borderRadius: "0 0 8px 8px",
                          }}
                        >
                          {user.displayName}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button onClick={handleLogOut} variant="secondary">
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink
                  style={{ color: "black", textDecoration: "none" }}
                  to="/login"
                  activeClassName="active"
                >
                  LogIn
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
