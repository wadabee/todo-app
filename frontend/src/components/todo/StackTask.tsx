import {
  Button,
  Card,
  CardActionArea,
  Checkbox,
  Collapse,
  Fade,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import DescriptionIcon from '@mui/icons-material/Description';
import React, { useState } from 'react';
import { Task } from '@backend/@types/Todo';
import DeleteIcon from '@mui/icons-material/Delete';
import useTodo from 'src/hooks/useTodo';

type Props = {
  task: Task;
};

const StackTask: React.FC<Props> = ({ task }) => {
  let clickOther = false;

  const { deleteTask, mutateTodos } = useTodo();
  const [selected, setSelected] = useState(false);
  const [note, setNote] = useState<string>(task.note ?? '');

  const handleTaskClick = () => {
    if (!clickOther) {
      setSelected(!selected);
    } else {
      clickOther = false;
    }
  };

  const handleUpdateTask = () => {};

  const handleCheckboxClick = () => {
    clickOther = true;

    console.log('checkbox');
  };

  const handleDelete = () => {
    deleteTask(task.id).then(() => {
      mutateTodos();
    });
  };

  return (
    <Card onClick={handleTaskClick} variant="outlined" sx={{ bgcolor: selected ? blue[50] : '' }}>
      <CardActionArea>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox onClick={handleCheckboxClick} />
          <Typography variant="body2">{task.title}</Typography>
          {task.note && task.note !== '' ? (
            <Fade in={!selected}>
              <DescriptionIcon fontSize="small" sx={{ ml: 1 }} />
            </Fade>
          ) : null}
        </Stack>

        <Collapse in={selected}>
          <Stack direction="row" justifyContent="flex-start" alignItems="center">
            <TextField
              sx={{ ml: 5 }}
              value={note}
              placeholder="メモ"
              multiline
              variant="standard"
              fullWidth
              onChange={(e) => setNote(e.target.value)}
              onClick={handleCheckboxClick}
            />

            <Button onClick={handleDelete}>
              <DeleteIcon color="error" />
            </Button>
          </Stack>
        </Collapse>
      </CardActionArea>
    </Card>
  );
};

export default StackTask;
