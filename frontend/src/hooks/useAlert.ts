import { AlertColor } from '@mui/material';
import { useContext } from 'react';
import { AlertContext } from '../providers/alert';

const useAlert = () => {
  const { state, dispatch } = useContext(AlertContext);

  const openAlert = (message: string, severity: AlertColor) => {
    dispatch({
      type: 'openAlert',
      message: message,
      severity: severity,
    });
  };

  const hideAlert = () => {
    dispatch({
      type: 'hideAlert',
    });
  };

  return { state, openAlert, hideAlert };
};

export default useAlert;
