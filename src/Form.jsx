import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiButton-root': {
      width: '100px',
      margin: theme.spacing(1),
      borderColor: theme.palette.success.light,
      color: theme.palette.success.light,
    },
    '& .MuiTextField-root': {
      width: '100%',
      minWidth: '145px',
    },
  },
}));

function Form(props) {
  const { addTask } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={addTask}>
      <Box display="flex" flexWrap="wrap">
        <Box flexGrow={1} p={1}>
          <TextField size="small" id="outlined-basic" label="Введите задачу" variant="outlined" />
        </Box>
        <Button variant="outlined" type="submit">
          ADD
        </Button>
      </Box>
    </form>
  );
}

export default Form;
