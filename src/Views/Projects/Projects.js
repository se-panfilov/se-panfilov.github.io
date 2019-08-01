import React, {Component} from 'react';
import './Projects.scss'

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ul>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}
