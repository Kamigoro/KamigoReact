import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';


class GithubProject extends Component {

    constructor(props){
        super();
        this.project = props.project;
    }

    getLanguageColor(){
        switch(this.project.language){
            case 'C#':
                return {color: "#189F20"};
            case 'Java':
                return {color:"#E5312D"};
            case 'HTML':
                return {color:"#E44D26"};
            default:
                return {color:"black"};
        }
    }

    render() {
        return (
            <tr>
                <td><a href={this.project.html_url} target="_blank" rel="noopener noreferrer">{this.project.name}</a></td>
                <td>{this.project.description}</td>
                <td style={this.getLanguageColor()}>{this.project.language}</td>
            </tr>
        );
    }
}

export default GithubProject;