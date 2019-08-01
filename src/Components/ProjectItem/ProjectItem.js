import React from 'react'

export function ProjectItem(props) {
  console.info(props);
  return (
    <section className={`${props.className ? props.className : ''} project`}>
      <div className="project__name">{props.name}</div>
    </section>
  )
}
