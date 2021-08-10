import React, { useState } from 'react';
import Item from './Item';

function List(props) {
  const [editingTask, setEditingTask] = useState(null);
  const {
    taskList, toggleTask, deleteTask, updateTask,
  } = props;

  // Функция устанавливает в состоянии id задачи, которая редактируется в данный момент.
  // По умолчанию null
  const changeEditingTask = (id) => {
    setEditingTask(id);
  };

  const activeTasks = taskList
    .filter((task) => task.active)
    .sort((task1, task2) => task2.id - task1.id);
  const inactiveTasks = taskList
    .filter((task) => !task.active)
    .sort((task1, task2) => task2.id - task1.id);
  return (
    [...activeTasks, ...inactiveTasks].map((task) => {
      const { active, id, text } = task;
      return (
        <Item
          active={active}
          id={id}
          text={text}
          key={id}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          changeEditingTask={changeEditingTask}
          isEditing={editingTask === id}
          updateTask={updateTask}
        />
      );
    })
  );
}

export default List;
