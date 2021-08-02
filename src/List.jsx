import React from 'react';
import Item from './Item';

function List(props) {
  const { taskList } = props;
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
        <Item active={active} id={id} text={text} key={id} />
      );
    })
  );
}

export default List;
