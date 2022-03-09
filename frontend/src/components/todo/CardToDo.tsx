import { Box, Button, Card, Grid, Stack, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { TodoAndTask } from '@backend/@types/Todo';
import useTodo from 'src/hooks/useTodo';
import MenuButtonTodo from './MenuButtonTodo';
import AddIcon from '@mui/icons-material/Add';
import AccordionTask from './AccordionTask';

type Props = {
  todo: TodoAndTask;
};

const CardToDo: React.FC<Props> = ({ todo }) => {
  const { updateTodo, mutateTodos, deleteTodo, addTask } = useTodo();
  const [title, setTitle] = useState<string>(todo.title);
  const [note, setNote] = useState<string>(todo.note ?? '');
  const [expanded, setExpanded] = useState<string | false>('');

  const isExpanded = useCallback((taskId: string) => expanded === taskId, [expanded]);
  const handleChange = (taskId: string, newExpanded: boolean) => {
    setExpanded(newExpanded ? taskId : false);
  };

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
        <AccordionTask
          key={task.id}
          task={task}
          expanded={isExpanded(task.id)}
          onChange={handleChange}
        />
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
