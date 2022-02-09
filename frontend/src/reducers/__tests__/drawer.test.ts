import { DrawerActions, drawerReducer, DrawerState } from '../drawer';

describe('drawerReducer', () => {
  test('showDrawer', () => {
    const state: DrawerState = false;
    const actions: DrawerActions = {
      type: 'showDrawer',
    };
    const actual = drawerReducer(state, actions);
    expect(actual).toBe(true);
  });

  test('hideDrawer', () => {
    const state: DrawerState = true;
    const actions: DrawerActions = {
      type: 'hideDrawer',
    };
    const actual = drawerReducer(state, actions);
    expect(actual).toBe(false);
  });
});
