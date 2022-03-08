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
import React, { useCallback } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  task: Task;
  expanded: boolean;
  onChange: (taskId: string, newExpanded: boolean) => void;
};

const AccordionTask: React.FC<Props> = ({ task, expanded, onChange }) => {
  return (
    <Accordion
      key={task.id}
      expanded={expanded}
      onChange={(e, newExpanded) => onChange(task.id, newExpanded)}
      disableGutters={true}
    >
      <AccordionSummary sx={{ ml: -1 }}>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox
            // checked={completed}
            // onClick={handleCheckboxClick}
            // onChange={handleCheck}
            sx={{ height: '16px' }}
          />
          <Typography>{task.title}</Typography>
          {task.note && task.note !== '' ? (
            <Fade in={!expanded}>
              <DescriptionIcon fontSize="small" sx={{ ml: 1 }} />
            </Fade>
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ mt: -1 }}>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          {/* <Typography>{task.note}</Typography> */}
          <TextField
            sx={{ ml: 5 }}
            value={task.note}
            placeholder="メモ"
            multiline
            variant="standard"
            fullWidth
            // onChange={(e) => setNote(e.target.value)}
            // onBlur={handleUpdateTask}
          />
          <Button>
            <DeleteIcon color="error" />
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionTask;
