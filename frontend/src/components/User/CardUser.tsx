import { User } from '@backend/@types/User';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

type Props = {
  user: User;
};

const CardUser: React.FC<Props> = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {user.id}:{user.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUser;
