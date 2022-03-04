import { Box, Card, Checkbox, Stack, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import DescriptionIcon from '@mui/icons-material/Description';
import React from 'react';
import StackTask from './StackTask';

type Props = {};

const CardToDo: React.FC<Props> = () => {
  const handleTaskClick = () => {
    console.log('click');
  };

  return (
    <Card>
      <Box sx={{ mx: 2, my: 1 }}>
        <Typography variant="h6" component="div">
          タスク2
        </Typography>
      </Box>
      {/* <Typography variant="body2">
        <Card variant="outlined" sx={{ bgcolor: blueGrey[50] }}>
          <Checkbox />
          サブタスク1
        </Card>
      </Typography> */}
      <StackTask />
    </Card>
  );
};

export default CardToDo;
