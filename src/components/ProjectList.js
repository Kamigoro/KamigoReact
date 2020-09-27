import React, { Component } from 'react';
import GithubProject from './GithubProject';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';

class ProjectList extends Component {

    state = {
        projects: []
    }

    componentDidMount(){
        fetch("https://api.github.com/users/kamigoro/repos")
        .then(response => response.json())
        .then(json => this.setState({projects: json}));
    }

    render() {
        return (
            <Carousel id="projectCarousel" style={{maxWidth:"30rem", marginLeft:"auto", marginRight:"auto"}}>
                {this.state.projects.map((project) => (
                    <Carousel.Item>
                        <GithubProject key={project.id} project={project}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default ProjectList;