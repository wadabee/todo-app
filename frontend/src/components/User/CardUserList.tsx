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
import GridUserCard from './GridUserCard';
import TableUserList from './TableUserList';

export const CardUserList: React.FC = () => {
  const { getAllUsers } = useUser();
  const { data, error } = getAllUsers();

  type ViewMode = 'grid' | 'list';
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const handleChangeView = (e: React.MouseEvent<HTMLElement>, newVal: ViewMode | null) => {
    if (newVal !== null) {
      setViewMode(newVal);
    }
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
            <ToggleButtonGroup
              value={viewMode}
              color="primary"
              exclusive
              onChange={handleChangeView}
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
