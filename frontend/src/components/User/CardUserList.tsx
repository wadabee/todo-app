import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Loading from 'src/components/Loading';
import useUser from 'src/hooks/useUser';
import CardUser from './CardUser';

export const CardUserList: React.FC = () => {
  const { getAllUsers } = useUser();
  const { data, error } = getAllUsers();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          ユーザ一覧取得
        </Typography>

        <Box sx={{ mt: 3 }}>
          {!data ? (
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item>
                <Loading />
              </Grid>
            </Grid>
          ) : (
            <Grid container direction="row" spacing={3}>
              {data.map
                ? data.map((user) => (
                    <Grid key={user.id} item md={3}>
                      <CardUser user={user} />
                    </Grid>
                  ))
                : ''}
            </Grid>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardUserList;
