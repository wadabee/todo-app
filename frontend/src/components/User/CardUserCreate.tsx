import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useUser from 'src/hooks/useUser';

export const CardUserCreate: React.FC = () => {
  const { registerUser } = useUser();

  const [userName, setUserName] = useState('');

  const handlerRegister = () => {
    registerUser(userName);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          ユーザ登録
        </Typography>

        <Grid sx={{ m: 3 }} container justifyContent="center">
          <Grid md={6}>
            <Stack sx={{ maxWidth: 500 }} direction="column" spacing={2}>
              <TextField
                label="ユーザ名"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Button variant="contained" onClick={handlerRegister}>
                登録
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardUserCreate;
