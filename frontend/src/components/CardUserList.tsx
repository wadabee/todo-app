import { Card, CardContent, Typography } from '@mui/material';
import { User } from '@shared/types/User';
import React from 'react';
import useUser from 'src/hooks/useUser';
import useSWR from 'swr';

export const CardUserList: React.FC = () => {
  const { getAllUsers } = useUser();
  const { data, error } = getAllUsers();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          ユーザ一覧取得
        </Typography>

        <Typography variant="h5" component="div">
          {!data ? 'データ未取得' : JSON.stringify(data)}
          {error ? 'エラー' : ''}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUserList;
