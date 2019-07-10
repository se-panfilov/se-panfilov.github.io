import React, {Component} from 'react';
import './Landing.scss';

export class Landing extends Component {
  render() {
    return (
      <div className="page -landing">
        <section className="page__content">
          <h1 className="page__header">Sergei Panfilov</h1>
          <h2 className="page__sub-header">Frontend - JavaScript - Development</h2>
          <section>
            <ul className="contacts-list">
              <li className="contacts-list__item">
                <a className="contacts-list__item-link"
                   href="https://github.com/se-panfilov">
                  <i className="icon fa fa-github"/>
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li className="contacts-list__item">
                <a className="contacts-list__item-link"
                   href="http://stackoverflow.com/users/930170/sergey-panfilov">
                  <i className="icon fa fa-stack-overflow"/>
                  <span className="label">StackOverFlow</span>
                </a>
              </li>
              <li className="contacts-list__item">
                <a className="contacts-list__item-link"
                   href="https://ru.linkedin.com/in/sepanfilov/en">
                  <i className="icon fa fa-linkedin"/>
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>)
  }
}
