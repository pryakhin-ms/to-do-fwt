import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiButton-root': {
      width: '20%',
      margin: theme.spacing(0.5),
      borderColor: theme.palette.success.light,
      color: theme.palette.success.light,
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
      width: '75%',
      '& fieldset': {
        borderColor: theme.palette.success.light,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.success.light,
      },
      '& .Mui-focused': {
        color: theme.palette.success.light,
        borderColor: theme.palette.success.light,
      },
      '& .Mui-focused fieldset': {
        color: theme.palette.success.light,
        borderColor: theme.palette.success.light,
      },
    },
  },
}));

function Form() {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField size="small" id="outlined-basic" label="Введите задачу" variant="outlined" />
      <Button variant="outlined" disabled={false} type="submit" size="medium">
        ADD
      </Button>
    </form>
  );
}

export default Form;
