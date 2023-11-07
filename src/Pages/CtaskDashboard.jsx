import React from 'react';
import Container from 'react-bootstrap/Container';
import '../Assets/css/Welcome.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Image } from 'react-bootstrap';

import ProfilePhoto from "../Assets/images/profile.jpg";


const CtashDashboard = () => {

  return (
    <Container fluid>
      {/* session one */}

      <Row
        style={{ paddingLeft: "35px", paddingRight: "35px", marginTop: "30px" }}
      >
        <Col lg={12}>
          <h1 style={{ fontSize: "1.71429em" }}>Your Works</h1>
          <hr></hr>
        </Col>
      </Row>

      {/* Session two */}

      <Row style={{ paddingLeft: "35px", paddingRight: "35px" }}>
        <div className="d-flex justify-content-between mb-3">
          <h6 style={{ marginRight: "10px" }}>Recent Projects</h6>
          <Button style={{ backgroundColor: "#385a64", border: 0 }} size="sm">
            {" "}
            View All{" "}
          </Button>
        </div>

        {/* session two container one begin */}
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/195/195549.png?ga=GA1.1.252936203.1681415593"
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Row>
                      <Col style={{ fontSize: "18px", fontWeight: "bold" }}>
                        AMS
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "12px" }}>
                        Account Management System
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="success" size="sm">
                    Completed
                  </Button>
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Manager</p>
                  <div
                    className="d-flex align-item-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <Row>
                        <Col>
                          <p style={{ fontSize: "12px" }}>Manoj L</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ marginTop: "-15px" }}>
                          <p style={{ fontSize: "12px" }}>manoj@tagcs.in</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Collaborators</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "49",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Duration</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>365 Days</p>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Initiation & Closure date</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>
                      08 Nov 2022 - 08 Nov 2023
                    </p>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "-5px" }}></hr>
              <p style={{ fontSize: "14px" }}>Quick Links</p>
              <div className="d-flex" style={{ marginTop: "-8px" }}>
                <a href="/projects" style={{ fontSize: "12px" }}>
                  View Project
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Story
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Modules
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* session two container one end*/}

        {/* session two container Two begin */}
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Row>
                      <Col style={{ fontSize: "18px", fontWeight: "bold" }}>
                        LMS
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "12px" }}>
                        Learning Management System
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="primary" size="sm">
                    In Progress
                  </Button>
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Manager</p>
                  <div
                    className="d-flex align-item-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <Row>
                        <Col>
                          <p style={{ fontSize: "12px" }}>Jai Kumar</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ marginTop: "-15px" }}>
                          <p style={{ fontSize: "12px" }}>jaikumar@tagcs.in</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Collaborators</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Duration</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>578 Days</p>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Initiation & Closure date</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>
                      25 Aug 2022 - 01 March 2024
                    </p>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "-5px" }}></hr>
              <p style={{ fontSize: "14px" }}>Quick Links</p>
              <div className="d-flex" style={{ marginTop: "-8px" }}>
                <a href="/projects" style={{ fontSize: "12px" }}>
                  View Project
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Story
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Modules
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* session two container Two end*/}

        {/* session two container Three begin */}
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/195/195542.png?ga=GA1.1.252936203.1681415593"
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Row>
                      <Col style={{ fontSize: "18px", fontWeight: "bold" }}>
                        OST
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "12px" }}>Onboarder's Trail</Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="warning" size="sm">
                    Tracking
                  </Button>
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Manager</p>
                  <div
                    className="d-flex align-item-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <Row>
                        <Col>
                          <p style={{ fontSize: "12px" }}>Jaikumar</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ marginTop: "-15px" }}>
                          <p style={{ fontSize: "12px" }}>jaikumar@tagcs.in</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Collaborators</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "49",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Duration</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>6 Days</p>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Initiation & Closure date</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>
                      08 Nov 2023 - 12 Nov 2023
                    </p>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "-5px" }}></hr>
              <p style={{ fontSize: "14px" }}>Quick Links</p>
              <div className="d-flex" style={{ marginTop: "-8px" }}>
                <a href="/projects" style={{ fontSize: "12px" }}>
                  View Project
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Story
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Modules
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* session two container Three end*/}
        <hr></hr>
      </Row>
    </Container>
  );
}

export default CtashDashboard;