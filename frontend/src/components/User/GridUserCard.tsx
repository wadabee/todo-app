import { User } from '@backend/types/User';
import { Grid } from '@mui/material';
import React from 'react';
import CardUser from './CardUser';

type Props = {
  users: User[];
};

const GridUserCard: React.FC<Props> = ({ users }) => {
  return (
    <Grid container direction="row" spacing={3}>
      {users.map
        ? users.map((user) => (
            <Grid key={user.id} item xs={6} sm={4}>
              <CardUser user={user} />
            </Grid>
          ))
        : ''}
    </Grid>
  );
};

export default GridUserCard;
