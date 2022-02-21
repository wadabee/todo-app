import { Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import useAlert from 'src/hooks/useAlert';
import useUser from 'src/hooks/useUser';
import BtnRegister from '../BtnRegister';

const CardTaskCreate: React.FC = () => {
  const { registerUser, mutateUsers } = useUser();
  const { openAlert } = useAlert();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const canRegister = useMemo<boolean>(() => {
    return title !== '';
  }, [title]);

  const handleRegister = () => {};

  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" component="div">
            タスク登録
          </Typography>

          <TextField
            label="タスク名"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="内容"
            variant="outlined"
            value={content}
            multiline
            onChange={(e) => setContent(e.target.value)}
          />
          <BtnRegister disabled={!canRegister} onClick={handleRegister} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardTaskCreate;
