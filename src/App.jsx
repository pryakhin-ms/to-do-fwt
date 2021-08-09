import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Form from './Form';
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

  // Функция для добавления новых задач
  const addTask = async (e) => {
    e.preventDefault();
    const text = e.target.elements[0].value;
    if (!text) {
      return;
    }
    try {
      await axios.post(API_URL, { text, active: true });
      const response = await axios.get(API_URL);
      setTasks(response.data);
      e.target.reset();
    // eslint-disable-next-line no-empty
    } catch (err) {
    }
  };

  const deleteTask = (id) => async (e) => {
    e.preventDefault();
    try {
      await axios.delete(getTaskUrl(id));
      const response = await axios.get(API_URL);
      setTasks(response.data);
    // eslint-disable-next-line no-empty
    } catch (err) {
    }
  };

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

  const updateTask = (id, currentTaskText) => async (e) => {
    e.preventDefault();
    const text = e.target.elements[0].value;
    if (!text || currentTaskText === text) {
      return;
    }
    try {
      await axios.patch(getTaskUrl(id), { text });
      const response1 = await axios.get(API_URL);
      setTasks(response1.data);
    // eslint-disable-next-line no-empty
    } catch (err) {
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <Form addTask={addTask} />
        <List
          taskList={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          updateTask={updateTask}
        />
      </Paper>
    </Container>
  );
}

export default App;
