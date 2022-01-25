import { useContext } from 'react';
import { DrawerContext } from '../providers/drawer';

const useDrawer = () => {
  const { isShowDrawer, dispatch } = useContext(DrawerContext);

  const showDrawer = () => {
    dispatch({
      type: 'showDrawer',
    });
  };

  const hideDrawer = () => {
    dispatch({
      type: 'hideDrawer',
    });
  };

  return { isShowDrawer, showDrawer, hideDrawer };
};

export default useDrawer;
