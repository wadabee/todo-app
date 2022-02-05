import { Alert, Snackbar } from '@mui/material';
import useAlert from 'src/hooks/useAlert';

const SnackbarAlert: React.FC = () => {
  const { state, hideAlert } = useAlert();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    hideAlert();
  };

  return (
    <Snackbar
      open={state.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert onClose={handleClose} severity="success" variant="filled">
        {state.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
