import React from 'react';
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import 'bootstrap/dist/css/bootstrap.min.css';
import ChronoTask from '../Assets/images/ChronoTask.png';
import ProfilePhoto from '../Assets/images/profile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faBell,
  faGear,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Profile Settings</Popover.Header>
    <Popover.Body>
      <div
        className="d-flex align-items-center"
        style={{ padding: "5px", borderRadius: "5px" }}
      >
        <Image
          src={ProfilePhoto}
          roundedCircle
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        />
        <div style={{ marginLeft: "10px" }}>
          <Row>
            <Col>Manoj L</Col>
          </Row>
          <Row>
            <Col>manoj@tagcs.in</Col>
          </Row>
        </div>
      </div>
      <div className="d-grid gap-2">
        <Button size="sm" style={{ backgroundColor: "#f1482f", border: 0 }}>
          <FontAwesomeIcon icon={faPenToSquare} style={{marginRight: '2px'}}/>
          Edit
        </Button>
      </div>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Header = () => {

  const location = useLocation();

  const welcome = location.pathname === "/";
  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  if (isSignUp || isSignIn || welcome) {
    return null;
  }


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#FFFFFF" }}
      data-bs-theme="light"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={ChronoTask}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ChronoTask
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Your Work" id="collapsible-nav-dropdown" active>
              <NavDropdown.Item href="#action/3.1">
                Assigned to me
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Daily Report
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Weekly Report
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "12px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontWeight: "bolder",
                }}
              >
                RECENT
              </p>
              <NavDropdown.Item href="#action/3.1">
                Account Management System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Learning Management System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Freshers Tasks
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Create Project
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Filters" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                View Completed
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                View Pending
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                View On Progress
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                View all issue
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Teams" id="collapsible-nav-dropdown">
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "12px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontWeight: "bolder",
                }}
              >
                YOUR COLLABORATORS
              </p>
              <NavDropdown.Item href="#action/3.1">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                  roundedCircle
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
                &nbsp;Jaikumar
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                  roundedCircle
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
                &nbsp;Gokul
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                  roundedCircle
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
                &nbsp;Sriharinivas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Create Team
              </NavDropdown.Item>
            </NavDropdown>

            <Button
              style={{ backgroundColor: "#385a64", border: 0 }}
              className="m-1"
            >
              Create
            </Button>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <div className="d-flex align-items-center justify-content-center m-1">
              <FontAwesomeIcon
                icon={faBell}
                style={{
                  transform: "rotate(30deg)",
                  color: "#385a64",
                  width: "20px",
                  height: "20px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faQuestion}
                style={{
                  color: "#385a64",
                  width: "20px",
                  height: "20px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faGear}
                style={{
                  color: "#385a64",
                  width: "20px",
                  height: "20px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              />
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Image
                  src={ProfilePhoto}
                  roundedCircle
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
              </OverlayTrigger>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;