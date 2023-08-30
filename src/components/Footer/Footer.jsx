import { Container, Row, Col } from "react-bootstrap";
// import MailchimpForm from "../MailchimpForm/MailchimpForm";
// import logo from "../../assets/img/logo.svg";
import logo from '../../assets/img/logo.png';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/luisalejandro.prieto.12" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/muscular_alien/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;