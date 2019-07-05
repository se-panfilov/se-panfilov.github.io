import React from 'react';

export class Landing extends React.Component {
  render() {
    return (<div className="landing">
      <h1>Sergei Panfilov</h1>
      <p>Frontend &nbsp;&bull;&nbsp; JavaScript &nbsp;&bull;&nbsp; Development</p>
      <nav>
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
            <a className="icon fa-facebook"
               href="https://www.facebook.com/sergey.panfilov.75">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a className="icon fa-vk"
               href="https://vk.com/se_panfilov">
              <span className="label">VK</span>
            </a>
          </li>
          <li>
            <a className="icon fa-linkedin"
               href="https://ru.linkedin.com/in/sepanfilov/en">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>)
  }
}
