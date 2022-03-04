import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { blueGrey, grey, lightBlue } from '@mui/material/colors';
import DescriptionIcon from '@mui/icons-material/Description';

const Todo: React.FC = () => {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card>
              <Box sx={{ mx: 2, my: 1 }}>
                <Typography variant="h6" component="div">
                  タスク2
                </Typography>
              </Box>
              <Typography variant="body2">
                <Card variant="outlined" sx={{ bgcolor: blueGrey[50] }}>
                  <Checkbox />
                  サブタスク1
                </Card>
              </Typography>
              <Box flexDirection="column" justifyContent="center">
                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                  <Checkbox />
                  <Typography variant="body2">サブタスク2</Typography>
                  <DescriptionIcon fontSize="small" />
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Todo;
