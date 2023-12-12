// ToDoListApp.tsx
import React, { useMemo } from 'react';
import { useAsyncRetry } from 'react-use';
import { TodoapiClient } from '../../clients/TodoapiClient';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

const TodolistPage = () => {
  const apiClient = useMemo(() => new TodoapiClient(), []);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const taskLoader = useAsyncRetry(async () => apiClient.getAllTasks(), []);
  const tasks = taskLoader.value ?? [];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = formData.get('task') as string;

    if (!value) {
      return;
    }

    apiClient
      .addNewTask({ text: value })
      .then(() => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      })
      .then(taskLoader.retry)
      .catch(console.error);
  };

  const handleDelete = (id: string) => {
    apiClient.deleteSingleTask(id).then(taskLoader.retry).catch(console.error);
  };

  const addTodo = () => {
    const value = inputRef.current?.value;

    if (!value) {
      return;
    }

    apiClient
      .addNewTask({ text: value })
      .then(() => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      })
      .then(taskLoader.retry)
      .catch(console.error);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">To-Do List App</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="newTodo"
          label="New To-Do"
          name="newTodo"
          autoFocus
          inputRef={inputRef}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          fullWidth
          startIcon={<AddIcon />}
        >
          Add To-Do
        </Button>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <Typography>{task.text}</Typography>
              <IconButton color="secondary" onClick={() => handleDelete(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TodolistPage;