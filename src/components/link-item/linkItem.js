import React from 'react'

export function LinkItem(props) {
  console.info(props);
  return (
    <a className={props.class ? props.class : ''} href={props.url}>
      <i className={`icon fa ${props.icon}`}/>
      <span className="label">{props.text}</span>
    </a>
  )
}
