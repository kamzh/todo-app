import React from 'react'
import PropTypes from 'prop-types'

import Task from '../components/Task.js'
import EditTask from '../components/EditTask.js'

function TaskList({ tasks, renderMode, onDeleteTask, onCompleteTask, onEditTask }) {
  const items = tasks.reduce((acc, task) => {
    let classList = ''
    const { description, created, id, editing, completed } = task
    let willRender = true
    if (task.completed) {
      classList += ' completed'
    }
    if (task.editing) {
      classList += ' editing'
    }

    switch (renderMode) {
      case 'Active':
        if (task.completed) willRender = false
        break
      case 'Completed':
        if (!task.completed) willRender = false
        break
      default:
    }

    if (willRender) {
      acc.push(
        <li className={classList} key={task.id}>
          <EditTask description={task.description} id={task.id} onEditTask={onEditTask} />
          <Task
            description={description}
            created={created}
            id={id}
            editing={editing}
            completed={completed}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            onEditTask={onEditTask}
          />
        </li>
      )
    }

    return acc
  }, [])

  return <ul className="todo-list">{items}</ul>
}

export default TaskList

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
    })
  ).isRequired,
  renderMode: PropTypes.oneOf(['All', 'Active', 'Completed']),
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  renderMode: 'All',
}

