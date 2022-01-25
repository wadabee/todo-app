export type DrawerState = boolean;

export type DrawerActions =
  | {
      type: 'showDrawer';
    }
  | {
      type: 'hideDrawer';
    };

export const drawerReducer: React.Reducer<DrawerState, DrawerActions> = (
  state: DrawerState,
  actions: DrawerActions,
) => {
  switch (actions.type) {
    case 'showDrawer':
      return true;
    case 'hideDrawer':
      return false;
  }
};
