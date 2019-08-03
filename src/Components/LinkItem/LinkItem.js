import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function LinkItem(props) {
  return (
    <a className={props.className ? props.className : ''}
       href={props.url}
       title={props.text}
    >
      <FontAwesomeIcon icon={props.icon} size="lg"/>
    </a>
  )
}
