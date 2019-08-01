import React from 'react';
import './Landing.scss';
import {LinkItem} from '../../Components/LinkItem/LinkItem'

export function Landing() {
  return (
    <div className="page -landing">
      <section className="page__content">
        <h1 className="page__header">Sergei Panfilov</h1>
        <h2 className="page__sub-header">Frontend - JavaScript - Development</h2>

        <section>
          <ul className="contacts-list">
            <li className="contacts-list__item">
              <LinkItem className="contacts-list__item-link"
                        url="https://github.com/se-panfilov"
                        icon="fa-github"
                        text="GitHub"/>
            </li>
            <li className="contacts-list__item">
              <LinkItem className="contacts-list__item-link"
                        url="http://stackoverflow.com/users/930170/sergey-panfilov"
                        icon="fa-stack-overflow"
                        text="StackOverFlow"/>
            </li>
            <li className="contacts-list__item">
              <LinkItem className="contacts-list__item-link"
                        url="https://ru.linkedin.com/in/sepanfilov/en"
                        icon="fa-linkedin"
                        text="LinkedIn"/>
            </li>
          </ul>
        </section>
      </section>
    </div>)
}
