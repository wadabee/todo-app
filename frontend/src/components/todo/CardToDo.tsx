import { Box, Button, Card, Grid, Icon, IconButton, Stack, TextField } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TodoAndTask } from '@backend/@types/Todo';
import useTodo from 'src/hooks/useTodo';
import MenuButtonTodo from './MenuButtonTodo';
import AddIcon from '@mui/icons-material/Add';
import AccordionTask from './AccordionTask';
import CircleProgressIcon from '../icons/CircleProgressIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { grey } from '@mui/material/colors';

type Props = {
  todo: TodoAndTask;
};

const CardToDo: React.FC<Props> = ({ todo }) => {
  const { updateTodo, mutateTodos, deleteTodo, addTask } = useTodo();
  const [title, setTitle] = useState<string>(todo.title);
  const [note, setNote] = useState<string>(todo.note ?? '');
  const [completed, setCompleted] = useState<boolean>(todo.completed);
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
      title,
      note: note ?? '',
    }).then(() => {
      mutateTodos();
    });
  };

  const handleUpdateCompleted = () => {
    updateTodo(todo.id, {
      completed: !completed,
    }).then(() => {
      setCompleted(!completed);
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

  const completedRatio = useMemo<number>(() => {
    if (todo.tasks.length === 0) return 0;

    const countCompletedTask = todo.tasks.filter((task) => task.completed).length;
    return Math.round((countCompletedTask / todo.tasks.length) * 100);
  }, [todo.tasks]);

  return (
    <Card sx={{ bgcolor: completed ? grey[300] : '' }}>
      <Box sx={{ py: 1 }}>
        <Stack direction="row" alignItems="center">
          <IconButton color="primary" size="large" onClick={() => handleUpdateCompleted()}>
            {completed ? (
              <CheckCircleIcon fontSize="large" />
            ) : (
              <CircleProgressIcon fontSize="large" value={completedRatio} />
            )}
          </IconButton>
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
          sx={{ mx: 2 }}
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
          disabled={completed}
          expanded={isExpanded(task.id)}
          onChange={handleChange}
        />
      ))}

      {!completed ? (
        <Grid container direction="row" justifyContent="center" sx={{ my: 1 }}>
          <Button variant="contained" size="small" color="primary" onClick={handleAddTask}>
            <AddIcon />
            タスクの追加
          </Button>
        </Grid>
      ) : null}
    </Card>
  );
};

export default CardToDo;
