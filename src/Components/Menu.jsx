import React, { Component } from 'react'
import pic from '../IMG/profilePic.png';
import '../Components/Menu.css';
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagramSquare,FaGithub,FaEnvelope,FaLinkedinIn } from 'react-icons/fa';
import {IoIosInformationCircle} from 'react-icons/io';
import { GoFileDirectory } from "react-icons/go";

import {ListGroup} from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <div className="MenuBarDiv">
                <div className="ProfilePicDiv">
                    <img src={pic} alt="profilePicture" />
                    <h2>Name Name</h2>
                </div>
                <ListGroup as="ul" id="MenuList" className="MenuUL">
                   <Link to="/"> <ListGroup.Item as="li"><span><IoIosInformationCircle/></span><h4>About</h4></ListGroup.Item></Link>
                   <Link to="/Projects"> <ListGroup.Item as="li"><span><GoFileDirectory/></span><h4>Projects</h4></ListGroup.Item></Link>
                   <Link to="/Contact"> <ListGroup.Item as="li"><span><FaEnvelope/></span><h4>Contact</h4></ListGroup.Item></Link>
                </ListGroup>
                <div>
                </div>
                <div className="Footer">
                <hr className="new5"></hr>
                <ul id="iconsList" className="IconsList">
                   <a href="#"> <li><span><FaFacebook /></span></li> </a> 
                   <a href="#"><li><span><FaGithub /></span></li></a> 
                   <a href="#"><li><span><FaLinkedinIn/></span></li></a> 
                </ul>
                </div>
               
            </div>
        )
    }
}
