import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './components/ProjectList';
import Map from './components/Map';


ReactDOM.render(<ProjectList/>, document.getElementById('projectList'));
ReactDOM.render(<Map />, document.getElementById('map'));

