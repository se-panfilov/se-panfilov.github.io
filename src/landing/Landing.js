import React, {Component} from 'react';
import './Landing.scss';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Sergei Panfilov</h1>
        <p>Frontend - JavaScript - Development</p>
        <section>
          <ul>
            <li>
              <a className="icon fa-envelope"
                 href="mailto:se-panfilov@ya.ru">
                <span className="label">se-panfilov@ya.ru</span>
              </a>
            </li>
            <li>
              <a className="icon fa fa-github"
                 href="https://github.com/se-panfilov">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a className="icon fa-stack-overflow"
                 href="http://stackoverflow.com/users/930170/sergey-panfilov">
                <span className="label">StackOverFlow</span>
              </a>
            </li>
            <li>
              <a className="icon fa-linkedin"
                 href="https://ru.linkedin.com/in/sepanfilov/en">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
      </div>)
  }
}
