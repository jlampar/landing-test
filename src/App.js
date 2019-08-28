import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="section1" className="jumbo justify-content-center align-items-center" fluid>
          <Container className="hero-container justify-content-center">
            <Container className="justify-content-center">
              <h1 className="title">MEET XYZ COMPANY<br />AT<br />CONFERENCE 2019</h1>
              <p className="stand-location">
                HALL 06.1, SPACE D-60
              </p>
              <div className="request-meeting-container">
                <Button variant="outline-primary" href="https://pipedrivewebforms.com/form/c373977da1107edc5d391840cd2a0bbf4517240">REQUEST A MEETING</Button>
              </div>
            </Container>
          </Container>
          <Container className="arrow-down-container">
            <a href="#section2">
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </Container>
        </Jumbotron>
        <Container id="section2" fluid className="biogram-container row justify-content-center align-items-center">
          <div className="biogram">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut felis in sem mollis interdum. Cras rhoncus nibh eu turpis laoreet, a suscipit leo congue. Sed bibendum sed felis a aliquam. In fringilla imperdiet rutrum. Donec ut faucibus turpis. Duis aliquam, justo a maximus posuere, quam diam auctor orci, ut consequat ex velit eu lectus. Praesent porttitor vitae odio eu elementum. Donec quis urna et odio dictum aliquet vel a felis. Etiam ac magna eget tortor maximus dignissim. Donec a quam nunc. Donec a nunc suscipit, convallis mauris ut, finibus orci. Mauris ornare nibh libero, vel ullamcorper mi ultrices ut. Proin tristique nisl eget ligula varius porta in vitae nisl.
          </div>
        </Container>
      </div>
    )
  }
}

export default App;
