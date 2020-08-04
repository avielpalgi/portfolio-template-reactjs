import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {ProgressBar} from 'react-bootstrap';
import '../Components/profile.css';
class ProfileDetails extends Component {
    render() {
        return (
                <div className="container aboutContainer">
                    <div className="row">
                    <div className="title"><h1>About Me</h1></div>
                    <div className="AboutDiv">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam sed leo dapibus egestas id id enim. Proin ullamcorper, ex quis laoreet feugiat, ligula nulla euismod neque, sed sollicitudin leo enim a nunc. Pellentesque rhoncus placerat eros, at sodales nulla pretium vitae. Nulla vulputate luctus venenatis. Etiam porttitor augue eu volutpat gravida. Duis a mattis velit. Etiam in ante ante. Suspendisse sed tellus eget turpis scelerisque mollis vitae ut nisi. Ut auctor in enim auctor elementum. Ut euismod sollicitudin convallis. In rutrum sapien in mauris tristique, ut sagittis risus interdum. Maecenas quis velit commodo magna commodo molestie. Curabitur laoreet neque metus, vel efficitur eros pulvinar ut. Duis vitae venenatis orci.
                        </p>
                    </div>
                    </div>
                <div className="row">
                <div className="title"><h1>Skills</h1></div>
                <div className="col-3"><h4>ReactJs</h4></div><div className="col-9 progressDiv"><ProgressBar now={80} /></div> 
                <div className="col-3"><h4>React-Native</h4></div><div className="col-9 progressDiv"><ProgressBar now={60} /></div> 
                <div className="col-3"><h4>Javascript</h4></div><div className="col-9 progressDiv"><ProgressBar now={87} /></div> 
                <div className="col-3"><h4>html</h4></div><div className="col-9 progressDiv"><ProgressBar now={95} /></div> 
                <div className="col-3"><h4>Css</h4></div><div className="col-9 progressDiv"><ProgressBar now={91} /></div> 
                <div className="col-3"><h4>SQL</h4></div><div className="col-9 progressDiv"><ProgressBar now={78} /></div> 
                <div className="col-3"><h4>C#</h4></div><div className="col-9 progressDiv"><ProgressBar now={88} /></div> 
                <div className="col-3"><h4>AJAX</h4></div><div className="col-9 progressDiv"><ProgressBar now={93} /></div> 
                <div className="col-3"><h4>JQuery</h4></div><div className="col-9 progressDiv"><ProgressBar now={76} /></div> 

                </div>
                </div>
                
        )
    }
}
export default withRouter(ProfileDetails);
