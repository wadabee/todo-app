import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Loading from 'src/components/Loading';
import useUser from 'src/hooks/useUser';
import GridUserCard from './GridUserCard';
import TableUserList from './TableUserList';
import ToggleBtnListView, { ViewMode } from '../ToggleBtnListView';

export const CardUserList: React.FC = () => {
  const { getAllUsers } = useUser();
  const { data, error } = getAllUsers();

  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const handleChangeView = (newVal: ViewMode) => {
    setViewMode(newVal);
  };

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="div">
              ユーザ一覧取得
            </Typography>
          </Grid>

          <Grid item>
            <ToggleBtnListView value={viewMode} onChange={handleChangeView} />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          {!data ? (
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item>
                <Loading />
              </Grid>
            </Grid>
          ) : viewMode === 'grid' ? (
            <GridUserCard users={data} />
          ) : (
            <TableUserList users={data} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardUserList;
