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
                return {color: "#250067"};
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
            <Card className="mb3" style={{minWidth:"13rem", height:"15rem", overflow: "hidden"}}>
                <Card.Header style={{backgroundColor:"#A2A2A9"}}>
                    <a href={this.project.html_url} target="_blank" rel="noopener noreferrer" style={{color:"black", fontFamily:""}} className="text-truncate">
                        <b>{this.project.name}</b>
                    </a>
                    <img src={this.project.owner.avatar_url} alt="github avatar" style={{height:"30px", width:"auto", float:"right"}}/>
                </Card.Header>
                <Card.Body>
                    <Card.Title style={this.getLanguageColor()}>{this.project.language}</Card.Title>
                    <Card.Text >{this.project.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default GithubProject;