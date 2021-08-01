import React from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

function Item(props) {
  const { text } = props;
  return (
    <Box display="flex">
      <Checkbox
        checked
      />
      <Box width={600} my="auto"><Typography variant="button">{text}</Typography></Box>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default Item;
