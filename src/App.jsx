import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import List from './List';

function App() {
  const { API_URL } = process.env;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data);
        // console.log(response.data);
      } catch (e) {
        // console.log('!!!!!!!!!!!!!!!!!', e.name + ':' + e.message);
      }
    };
    fetchTasks();
  }, []);
  return (
    <Container maxWidth="sm">
      <Paper>
        <List taskList={tasks} />
      </Paper>
    </Container>
  );
}

export default App;
