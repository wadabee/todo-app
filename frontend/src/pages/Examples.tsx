import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import useSWR from 'swr';
import { User } from '@shared/types/User';

const Examples: React.FC = () => {
  const fetcher = (url: string) => fetch(`http://localhost:8000${url}`).then((r) => r.json());
  const { data, error } = useSWR<User[]>('/users', fetcher);

  return (
    <>
      <h1>実装例</h1>

      <Box sx={{ m: 3 }}>
        <Stack>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                ユーザ一覧取得
              </Typography>

              <Typography variant="h5" component="div">
                {!data ? 'データ未取得' : JSON.stringify(data)}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default Examples;
