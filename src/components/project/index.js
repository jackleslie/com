import React from 'react'
import PropTypes from 'prop-types'

import projectStyles from './project.module.css'

const Project = ({ project, colour }) => (
  <a target="_blank" href={project.link}>
    <div className={`${projectStyles.container} ${projectStyles[colour]}`}>
      <h3 className={projectStyles.projectTitle}>{project.title}</h3>
      <h4 className={projectStyles.projectDescription}>
        {project.description}
      </h4>
      <h5 className={projectStyles.projectAward}>{`🏆${project.award} @ ${
        project.event
      } | ${project.issuer}`}</h5>
    </div>
  </a>
)

Project.propTypes = {
  project: PropTypes.object.isRequired,
  colour: PropTypes.string,
}

Project.defaultProps = {
  colour: 'blue',
}

export default Project
