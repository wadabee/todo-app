import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Loading from 'src/components/Loading';
import useUser from 'src/hooks/useUser';
import ToggleBtnListView, { ViewMode } from '../ToggleBtnListView';

export const CardTaskList: React.FC = () => {
  const { getAllUsers } = useUser();
  const { data, error } = getAllUsers();

  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const handleChangeView = (newVal: ViewMode) => {
    setViewMode(newVal);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          タスク一覧取得
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTaskList;
