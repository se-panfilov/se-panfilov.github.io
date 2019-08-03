import React from 'react';
import './Landing.scss';
import { LinkItem } from '../../Components/LinkItem/LinkItem'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Landing() {
  return (
    <div className="page -landing">
      <section className="page__content">
        <h1 className="page__header">Sergei Panfilov</h1>
        <h2 className="page__sub-header">Frontend Developer</h2>

        <section>
          <ul className="contacts-list">
            <li className="contacts-list__item">
              <LinkItem className="contacts-list__item-link"
                        url="https://github.com/se-panfilov"
                        icon={faGithub}
                        text="GitHub"/>
            </li>
            <li className="contacts-list__item">
              <LinkItem className="contacts-list__item-link"
                        url="http://stackoverflow.com/users/930170/sergey-panfilov"
                        icon={faStackOverflow}
                        text="StackOverFlow"/>
            </li>
            <li className="contacts-list__item">
              <LinkItem className="contacts-list__item-link"
                        url="https://ru.linkedin.com/in/sepanfilov/en"
                        icon={faLinkedin}
                        text="LinkedIn"/>
            </li>
          </ul>
        </section>
      </section>
    </div>)
}
