import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../Components/profile.css';
import { MdEmail,MdLocationOn } from "react-icons/md";
import '../Components/contact.css';
import { FaFacebook,FaInstagramSquare,FaGithub,FaEnvelope,FaPhoneAlt,FaLinkedinIn } from 'react-icons/fa';
import { Button, Col, Row, Form, ListGroup, Card, ListGroupItem, Container } from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            local: this.props.local,
            navbar: this.props.navbarOpenCheck,
            name: '',
            email: '',
            message: ''
        }
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    sendEmail = () => {
        let message = {
            Name: this.state.name,
            Body: this.state.message,
            EmailFrom: this.state.email,
        }
    }
    render() {
        return (
            <Container className="aboutContainer">
                <Row className="divContact">
                <div className="title"><h1>Contact</h1></div>
                <Col md="6" className="SendMessageContact">
                    <Card className="cardContact">
                        <Card.Header className="border-bottom headDiv">
                            <h2 className="m-0">Contact Us</h2>
                        </Card.Header>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <Form className="myForm">
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <label>First Name</label>
                                            <input
                                                className="form-control"
                                                placeholder="Name"
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.onNameChange.bind(this)}
                                            />
                                        </Col>
                                        <Col md="12" className="form-group">
                                            <label>Email Address</label>
                                            <input
                                                className="form-control"
                                                placeholder="Email Address"
                                                type="email"
                                                value={this.state.email}
                                                onChange={this.onEmailChange.bind(this)}
                                            />
                                        </Col>
                                        <Col md="12" className="form-group MessageBody">
                                            <label>Message</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Your Message"
                                                value={this.state.message}
                                                onChange={this.onMessageChange.bind(this)}
                                            />
                                        </Col>
                                    </Row>
                                </Form>
                                <Row>
                                    <Col className="ColBtnSave">
                                        <Button className="BtnSave" onClick={() => { this.sendEmail() }} type="button" >Send Message</Button>
                                    </Col>

                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md="6">
                 <ListGroup as="ul" className="DetailsContact">
                        <ListGroup.Item as="li"><span><MdEmail/></span> Email: <span className="detail"><a href = "mailto: #">example@gmail.com</a></span></ListGroup.Item>
                        <ListGroup.Item as="li"><span><FaPhoneAlt/></span> Phone: <span className="detail"><a href="tel:#">054-555-5555</a></span></ListGroup.Item>
                        <ListGroup.Item as="li"><span><MdLocationOn/></span> Address: <span className="detail">city name</span></ListGroup.Item>
                    </ListGroup>
                    <ul id="contactIcons" className="IconsList">
                    <li><span><FaFacebook /></span></li>
                    <li><span><FaGithub /></span></li>
                    <li><span><FaLinkedinIn/></span></li>
                </ul>
                </Col>
                </Row>
                </Container>
               
        )
    }
}
export default withRouter(Contact);
