import { createContext, useReducer } from 'react';
import { AlertActions, alertReducer, AlertState } from 'src/reducers/alert';

export type AlertContextType = {
  state: AlertState;
  dispatch: React.Dispatch<AlertActions>;
};
const initialState: AlertState = {
  isOpen: false,
  message: '',
  severity: 'info',
};

export const AlertContext = createContext({} as AlertContextType);

export const AlertProvider = (props: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  return <AlertContext.Provider value={{ state, dispatch }} {...props} />;
};
