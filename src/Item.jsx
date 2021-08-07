import React from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

function Item(props) {
  const {
    text, active, toggleTask, id, deleteTask,
  } = props;
  const decoratedText = active ? text : <s>{text}</s>;
  return (
    <Box display="flex" my={0.5} width="100%">
      <Checkbox
        checked={!active}
        onClick={toggleTask(id, active)}
      />
      <Box width="100%" my="auto"><Typography variant="button">{decoratedText}</Typography></Box>
      <IconButton onClick={deleteTask(id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default Item;
