import {
  Box,
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ListAltIcon from '@mui/icons-material/ListAlt';
import React, { useState } from 'react';
import Loading from 'src/components/Loading';
import useUser from 'src/hooks/useUser';
import CardUser from './CardUser';

export const CardUserList: React.FC = () => {
  const { getAllUsers } = useUser();
  const { data, error } = getAllUsers();

  type ViewMode = 'grid' | 'list';
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

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
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(e, newVal) => setViewMode(newVal)}
              aria-label="text alignment"
            >
              <ToggleButton value="grid" aria-label="left aligned">
                <GridViewIcon />
              </ToggleButton>
              <ToggleButton value="list" aria-label="centered">
                <ListAltIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>

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
                ? data.map((user) =>
                    viewMode === 'grid' ? (
                      <Grid key={user.id} item xs={6} sm={4}>
                        <CardUser user={user} />
                      </Grid>
                    ) : (
                      user.name
                    ),
                  )
                : ''}
            </Grid>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardUserList;
