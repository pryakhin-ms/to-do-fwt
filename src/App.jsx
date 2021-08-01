import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import List from './List';

function App() {
  const taskList = [
    { text: 'Hello, world', active: true, id: 1 },
    { text: 'Pet my dog', active: false, id: 2 },
    { text: 'Wash dishes', active: false, id: 3 },
  ];
  return (
    <Container maxWidth="sm">
      <Paper>
        <List taskList={taskList} />
      </Paper>
    </Container>
  );
}

export default App;
