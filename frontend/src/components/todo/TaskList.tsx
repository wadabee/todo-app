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
  tasks: Task[];
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const isExpanded = useCallback((taskId: string) => expanded === taskId, [expanded]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {tasks.map((task) => (
        <Accordion
          key={task.id}
          expanded={isExpanded(task.id)}
          onChange={handleChange(task.id)}
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
                <Fade in={!isExpanded(task.id)}>
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
      ))}
    </>
  );
};

export default TaskList;
