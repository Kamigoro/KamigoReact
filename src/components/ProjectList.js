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
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.projects.map((project) => (
                        <GithubProject key={project.id} project={project}/>
                    ))}
                </tbody>
            </table>
                
        );
    }
}

export default ProjectList;