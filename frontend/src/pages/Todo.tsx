import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import CardTaskCreate from 'src/components/Todo/CardTaskCreate';
import CardTaskList from 'src/components/Todo/CardTaskList';

const Todo: React.FC = () => {
  return (
    <>
      <Box sx={{ m: 3 }}>
        <Stack spacing={3}>
          <CardTaskList />
          <CardTaskCreate />
        </Stack>
      </Box>
    </>
  );
};

export default Todo;
