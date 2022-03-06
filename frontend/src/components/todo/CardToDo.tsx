import { Box, Button, Card, Grid, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import StackTask from './StackTask';
import { TodoAndTask } from '@backend/@types/Todo';
import useTodo from 'src/hooks/useTodo';
import MenuButtonTodo from './MenuButtonTodo';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  todo: TodoAndTask;
};

const CardToDo: React.FC<Props> = ({ todo }) => {
  const { updateTodo, mutateTodos, deleteTodo, addTask } = useTodo();
  const [title, setTitle] = useState<string>(todo.title);
  const [note, setNote] = useState<string>(todo.note ?? '');

  const handleUpdateTodo = () => {
    if (todo.title === title && todo.note === note) {
      return;
    }
    updateTodo(todo.id, {
      title: title,
      note: note ?? '',
    }).then(() => {
      mutateTodos();
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id).then(() => {
      mutateTodos();
    });
  };

  const handleAddTask = () => {
    addTask(todo.id, {
      title: '新規タスク',
    }).then(() => {
      mutateTodos();
    });
  };

  return (
    <Card>
      <Box sx={{ px: 2, py: 1 }}>
        <Stack direction="row">
          <TextField
            value={title}
            variant="standard"
            fullWidth
            InputProps={{ style: { fontSize: 25 } }}
            onBlur={handleUpdateTodo}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MenuButtonTodo onDelete={handleDelete} />
        </Stack>

        <TextField
          value={note}
          hiddenLabel
          placeholder="メモ"
          multiline
          variant="standard"
          fullWidth
          onBlur={handleUpdateTodo}
          onChange={(e) => setNote(e.target.value)}
        />
      </Box>

      {todo.tasks.map((task) => (
        <StackTask key={task.id} task={task} />
      ))}

      <Grid container direction="row" justifyContent="center" sx={{ my: 1 }}>
        <Button variant="contained" size="small" color="primary" onClick={handleAddTask}>
          <AddIcon />
          タスクの追加
        </Button>
      </Grid>
    </Card>
  );
};

export default CardToDo;
