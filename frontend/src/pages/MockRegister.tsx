import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const MockRegister = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" align="left">
        ユーザ登録（モックアップ）
      </Typography>

      <Card sx={{ m: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="姓" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="名" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={6}>
              <TextField label="姓：カナ" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="名：カナ" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} textAlign="left">
              <FormControl>
                <FormLabel>性別</FormLabel>
                <RadioGroup row defaultValue="female">
                  <FormControlLabel value="female" control={<Radio />} label="女性" />
                  <FormControlLabel value="male" control={<Radio />} label="男性" />
                  <FormControlLabel value="other" control={<Radio />} label="その他" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justifyContent="flex-end">
            <Button variant="contained" color="success">
              登録
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MockRegister;
