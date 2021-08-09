import React from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import Typography from '@material-ui/core/Typography';

function Item(props) {
  const {
    text, active, toggleTask, id, deleteTask, changeEditingTask, isEditing, updateTask,
  } = props;
  const decoratedText = active ? text : <s>{text}</s>;
  const handleUpdateTask = (taskId, currentTaskText) => async (e) => {
    e.preventDefault();
    changeEditingTask(null);
    await updateTask(taskId, currentTaskText)(e);
  };
  const changeTaskForm = (
    <form onSubmit={handleUpdateTask(id, text)}>
      <TextField id="standard-basic" defaultValue={text} autoFocus margin="dense" />
      <IconButton type="submit">
        <CheckOutlinedIcon />
      </IconButton>
    </form>
  );
  return (
    <Box display="flex" my={0.5} width="100%">
      <Checkbox
        checked={!active}
        onClick={toggleTask(id, active)}
        disabled={isEditing}
      />
      <Box width="100%" my="auto" display="flex" flexWrap="wrap">
        {!isEditing && <Typography variant="button" onClick={() => changeEditingTask(id)}>{decoratedText}</Typography>}
        {isEditing
        && changeTaskForm}
      </Box>
      <IconButton disabled={isEditing} onClick={deleteTask(id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default Item;
