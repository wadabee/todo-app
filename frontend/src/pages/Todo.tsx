import { Box, Grid } from '@mui/material';
import CardToDo from 'src/components/todo/CardToDo';

const Todo: React.FC = () => {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardToDo />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Todo;
