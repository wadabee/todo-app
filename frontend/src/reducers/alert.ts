import { AlertColor } from '@mui/material';

export type AlertState = {
  isOpen: boolean;
  message: string;
  severity: AlertColor;
};

export type AlertActions =
  | {
      type: 'openAlert';
      message: string;
      severity: AlertColor;
    }
  | {
      type: 'hideAlert';
    };

export const alertReducer: React.Reducer<AlertState, AlertActions> = (
  state: AlertState,
  actions: AlertActions,
) => {
  switch (actions.type) {
    case 'openAlert':
      return {
        isOpen: true,
        message: actions.message,
        severity: actions.severity,
      };
    case 'hideAlert':
      return {
        ...state,
        isOpen: false,
        message: '',
      };
  }
};
