import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function CommonHeader(props) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Library App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            {JSON.parse(localStorage.getItem("session")).role === "admin" && (
              <>
                <NavItem>
                  <NavLink href="/admin-dashboard/" style={{whiteSpace:"nowrap"}}>
                    Admin Dashboard
                  </NavLink>
                </NavItem>
              </>
            )}
             {JSON.parse(localStorage.getItem("session")).role === "librarian" && (
              <>
                <NavItem>
                  <NavLink href="/librarian-dashboard/" style={{whiteSpace:"nowrap"}}>
                    Librarian Dashboard
                  </NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
          <Nav
            className="mr-auto justify-content-end"
            style={{ width: "100%" }}
            navbar
          >
            {!localStorage.getItem("session") && (
              <NavItem>
                <NavLink href="/auth">Login</NavLink>
              </NavItem>
            )}
            {localStorage.getItem("session") &&
              JSON.parse(localStorage.getItem("session")).name && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Welcome {JSON.parse(localStorage.getItem("session")).name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>My Account</DropdownItem>
                    <DropdownItem>Request Book</DropdownItem>
                    <DropdownItem>Add Student</DropdownItem>
                    <DropdownItem>Add Librarian</DropdownItem>
                    <DropdownItem>Add Books</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      onClick={() => {
                        localStorage.clear();
                        navigate("/auth");
                      }}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
