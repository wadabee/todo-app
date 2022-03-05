import { Box, Card, TextField, Typography } from '@mui/material';
import React from 'react';
import StackTask from './StackTask';
import { Todo } from '@backend/@types/Todo';

type Props = {
  todo: Todo;
};

const CardToDo: React.FC<Props> = ({ todo }) => {
  return (
    <Card>
      <Box sx={{ px: 2, py: 1 }}>
        <TextField
          value={todo.title}
          variant="standard"
          fullWidth
          InputProps={{ style: { fontSize: 25 } }}
        />
        <TextField hiddenLabel placeholder="メモ" multiline variant="standard" fullWidth />
      </Box>
      <StackTask />
    </Card>
  );
};

export default CardToDo;
