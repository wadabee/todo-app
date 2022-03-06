import { Box, Card, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import StackTask from './StackTask';
import { Todo } from '@backend/@types/Todo';
import useTodo from 'src/hooks/useTodo';

type Props = {
  todo: Todo;
};

const CardToDo: React.FC<Props> = ({ todo }) => {
  const { updateTodo, mutateTodos } = useTodo();
  const [title, setTitle] = useState(todo.title);
  const [note, setNote] = useState(todo.note);

  const handleUpdateTodo = () => {
    if (todo.title === title && todo.note === note) {
      return;
    }
    updateTodo(todo.id, {
      title: title,
      note: note ?? '',
    }).then((updatedTodo) => {
      mutateTodos(updatedTodo);
    });
  };

  return (
    <Card>
      <Box sx={{ px: 2, py: 1 }}>
        <TextField
          value={title}
          variant="standard"
          fullWidth
          InputProps={{ style: { fontSize: 25 } }}
          onBlur={handleUpdateTodo}
          onChange={(e) => setTitle(e.target.value)}
        />
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
      <StackTask />
    </Card>
  );
};

export default CardToDo;
