import { Alert, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import useUser from 'src/hooks/useUser';
import BtnSearch from '../BtnSearch';
import CardUser from './CardUser';

export const CardUserSearch: React.FC = () => {
  const { searchUserById } = useUser();

  const [userId, setUserId] = useState<number>();
  const [searchUserId, setSearchUserId] = useState<number>();

  const { data, error } = searchUserById(userId);

  const canSearch = useMemo<boolean>(() => {
    return userId !== undefined;
  }, [userId]);

  const handleSearch = () => {
    setSearchUserId(userId);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          ユーザ検索
        </Typography>

        <Grid sx={{ m: 3 }} container justifyContent="center">
          <Grid item xs={6}>
            <Stack direction="column" spacing={2}>
              <TextField
                label="ユーザID"
                variant="outlined"
                type="tel"
                value={userId || ''}
                onChange={(e) => setUserId(Number.parseInt(e.target.value))}
              />

              {data ? (
                <CardUser user={data} />
              ) : userId ? (
                <Alert severity="error">ユーザが存在しません</Alert>
              ) : (
                <Alert severity="warning">検索条件を入力してください</Alert>
              )}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardUserSearch;
