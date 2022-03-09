import { Task } from '@backend/@types/Todo';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Fade,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';
import useTodo from 'src/hooks/useTodo';

type Props = {
  task: Task;
  expanded: boolean;
  onChange: (taskId: string, newExpanded: boolean) => void;
};

const AccordionTask: React.FC<Props> = ({ task, expanded, onChange }) => {
  let clickedOthers = false;

  const { deleteTask, mutateTodos, updateTask } = useTodo();
  const [title, setTitle] = useState<string>(task.title);
  const [note, setNote] = useState<string>(task.note ?? '');
  const [completed, setCompleted] = useState<boolean>(task.completed);

  const handleAccordion = (newExpanded: boolean) => {
    if (!clickedOthers) {
      onChange(task.id, newExpanded);
    } else {
      clickedOthers = false;
    }
  };

  const handleClickOthers = () => {
    clickedOthers = true;
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setCompleted(checked);
    updateTask(task.id, {
      completed: checked,
    }).catch(() => {
      setCompleted(!checked);
    });
  };

  const handleUpdateTask = () => {
    if (title !== task.title || note !== task.note) {
      updateTask(task.id, {
        title,
        note,
      }).then(() => {
        mutateTodos();
      });
    }
  };

  const handleDelete = () => {
    deleteTask(task.id).then(() => {
      mutateTodos();
    });
  };

  return (
    <Accordion
      key={task.id}
      expanded={expanded}
      onChange={(e, newExpanded) => handleAccordion(newExpanded)}
      disableGutters={true}
    >
      <AccordionSummary sx={{ ml: -1 }}>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox
            checked={completed}
            onClick={handleClickOthers}
            onChange={handleCheck}
            sx={{ height: '16px' }}
          />
          {expanded ? (
            <TextField
              sx={{ width: '50vw' }}
              value={title}
              placeholder="タスク名"
              variant="standard"
              onClick={handleClickOthers}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleUpdateTask}
            />
          ) : (
            <Typography>{task.title}</Typography>
          )}
          {note !== '' ? (
            <Fade in={!expanded}>
              <DescriptionIcon fontSize="small" sx={{ ml: 1 }} />
            </Fade>
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ mt: -1 }}>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <TextField
            sx={{ ml: 4 }}
            value={note}
            placeholder="メモ"
            multiline
            variant="standard"
            fullWidth
            onChange={(e) => setNote(e.target.value)}
            onBlur={handleUpdateTask}
          />
          <Button>
            <DeleteIcon color="error" onClick={handleDelete} />
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionTask;
