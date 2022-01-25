import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import useDrawer from '../hooks/useDrawer';
import { useNavigate } from 'react-router-dom';

const AppDrawer = () => {
  const navigate = useNavigate();
  const { isShowDrawer, hideDrawer } = useDrawer();

  return (
    <Drawer anchor="left" open={isShowDrawer} onClose={hideDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onClick={hideDrawer} onKeyDown={hideDrawer}>
        <List>
          <ListItem button onClick={() => navigate('examples')}>
            <ListItemIcon>
              <StickyNote2Icon />
            </ListItemIcon>
            <ListItemText primary="Examples" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
