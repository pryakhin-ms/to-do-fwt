import React from 'react';
import Item from './Item';

function List(props) {
  const { taskList } = props;
  return (
    taskList.map((task) => {
      const { text, active, id } = task;
      return <Item text={text} active={active} key={id} />;
    })
  );
}

export default List;
