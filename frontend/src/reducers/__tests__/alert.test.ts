import { AlertActions, alertReducer, AlertState } from '../alert';

describe('alertReducer', () => {
  test('openAlert', () => {
    const state: AlertState = {
      isOpen: false,
      message: '',
      severity: 'info',
    };
    const actions: AlertActions = {
      type: 'openAlert',
      message: 'test-message',
      severity: 'error',
    };
    const actual = alertReducer(state, actions);
    expect(actual).toEqual({
      isOpen: true,
      message: 'test-message',
      severity: 'error',
    } as AlertState);
  });

  test('hideAlert', () => {
    const state: AlertState = {
      isOpen: true,
      message: 'hide-message',
      severity: 'info',
    };
    const actions: AlertActions = {
      type: 'hideAlert',
    };
    const actual = alertReducer(state, actions);
    expect(actual).toEqual({
      isOpen: false,
      message: '',
      severity: 'info',
    } as AlertState);
  });
});
