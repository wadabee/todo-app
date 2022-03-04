import {
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

type Props = {};

const StackTask: React.FC<Props> = () => {
  let clickOther = false;

  const [selected, setSelected] = useState(false);

  const handleTaskClick = () => {
    if (!clickOther) {
      setSelected(!selected);
    } else {
      clickOther = false;
    }
  };

  const handleCheckboxClick = () => {
    clickOther = true;

    console.log('checkbox');
  };

  return (
    <Card onClick={handleTaskClick} variant="outlined" sx={{ bgcolor: selected ? blue[50] : '' }}>
      <CardActionArea>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox onClick={handleCheckboxClick} />
          <Typography variant="body2">サブタスク2</Typography>
          <Fade in={!selected}>
            <DescriptionIcon fontSize="small" />
          </Fade>
        </Stack>
        <Collapse in={selected}>
          <TextField
            sx={{ ml: 5 }}
            placeholder="メモ"
            multiline
            variant="standard"
            fullWidth
            onClick={handleCheckboxClick}
          />
        </Collapse>
      </CardActionArea>
    </Card>
  );
};

export default StackTask;
