import { Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useUser from 'src/hooks/useUser';
import BtnRegister from '../BtnRegister';

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
          <Grid item md={6}>
            <Stack direction="column" spacing={2}>
              <TextField
                label="ユーザ名"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <BtnRegister onClick={handlerRegister} />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardUserCreate;
