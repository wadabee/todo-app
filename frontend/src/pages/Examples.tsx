import { Box, Stack } from '@mui/material';
import CardUserCreate from 'src/components/CardUserCreate';
import CardUserList from 'src/components/CardUserList';

const Examples: React.FC = () => {
  return (
    <>
      <h1>実装例</h1>

      <Box sx={{ m: 3 }}>
        <Stack spacing={3}>
          <CardUserList />

          <CardUserCreate />
        </Stack>
      </Box>
    </>
  );
};

export default Examples;
