import {
  Alert,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import useAlert from 'src/hooks/useAlert';
import useUser from 'src/hooks/useUser';
import BtnRegister from '../BtnRegister';

export const CardUserCreate: React.FC = () => {
  const { registerUser } = useUser();
  const { openAlert } = useAlert();

  const [userName, setUserName] = useState('');

  const canRegister = useMemo<boolean>(() => {
    return userName !== '';
  }, [userName]);

  const handleRegister = () => {
    registerUser(userName).then((data) => {
      setUserName('');
      openAlert('ユーザを登録しました', 'success');
    });
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
              <BtnRegister disabled={!canRegister} onClick={handleRegister} />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardUserCreate;
