import { createContext, useReducer } from 'react';
import { DrawerActions, drawerReducer, DrawerState } from '../reducers/drawer';

export type DrawerContextType = {
  isShowDrawer: DrawerState;
  dispatch: React.Dispatch<DrawerActions>;
};
const initialState: DrawerState = false;

export const DrawerContext = createContext({} as DrawerContextType);

export const DrawerProvider = (props: React.PropsWithChildren<{}>) => {
  const [isShowDrawer, dispatch] = useReducer(drawerReducer, initialState);

  return <DrawerContext.Provider value={{ isShowDrawer, dispatch }} {...props} />;
};
