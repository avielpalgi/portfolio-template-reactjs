import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../Components/projects.css';
import project from '../IMG/project.jpg'
import Carousel from 'react-bootstrap/Carousel';
class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            Projects:[
                {
                    Name:'Project1',
                    link:"#",
                    img:project
                },
                {
                    Name:"Project2",
                    link:"#",
                    img:project
                },
                {
                  Name:"Project3",
                  link:"#",
                  img:project
              },
              {
                Name:"Project4",
                link:"#",
                img:project
            },
            ]
        }
    }
    render() {
        return (
            <div className="container aboutContainer">
            <div className="row">
                <div className="title"><h1>Projects</h1></div>
            </div>
           <Carousel interval={ null } className="items">
               {this.state.Projects ? this.state.Projects.map((item)=>{
                  return(<Carousel.Item className="itemProj">
                    <img
                      className=""
                      src={item.img}
                      alt={item.Name}
                    />
                    <Carousel.Caption className="itemLink">
                  <h4>{item.Name}</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
               }) :null}
           </Carousel>
           
        </div>
        )
    }
}

export default withRouter(Projects);

