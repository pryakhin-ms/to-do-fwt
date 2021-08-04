import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import List from './List';

function App() {
  const { API_URL } = process.env;
  const [tasks, setTasks] = useState([]);
  // Функция для получения url-a задачи по её id
  const getTaskUrl = (id) => API_URL + id;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data);
      // eslint-disable-next-line no-empty
      } catch (e) {
      }
    };
    fetchTasks();
  }, []);

  // Функция переключения состояния задачи (active/inactive)
  const toggleTask = (id, active) => async () => {
    try {
      await axios.patch(getTaskUrl(id), { active: !active });
      const response1 = await axios.get(API_URL);
      setTasks(response1.data);
    // eslint-disable-next-line no-empty
    } catch (err) {
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <List taskList={tasks} toggleTask={toggleTask} />
      </Paper>
    </Container>
  );
}

export default App;
