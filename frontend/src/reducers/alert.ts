export type AlertState = {
  isOpen: boolean;
  message: string;
};

export type AlertActions =
  | {
      type: 'openAlert';
      message: string;
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
      };
    case 'hideAlert':
      return {
        isOpen: false,
        message: '',
      };
  }
};
