import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
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

        <Typography variant="h5" component="div">
          <TextField
            label="ユーザ名"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Typography>
        <Button variant="contained" onClick={handlerRegister}>
          登録
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardUserCreate;
