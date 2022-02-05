import { useContext } from 'react';
import { AlertContext } from '../providers/alert';

const useAlert = () => {
  const { state, dispatch } = useContext(AlertContext);

  const openAlert = (message: string) => {
    dispatch({
      type: 'openAlert',
      message: message,
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
