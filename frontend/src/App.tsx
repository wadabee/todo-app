import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AppBarMain from './components/AppBarMain';
import AppDrawer from './components/AppDrawer';
import { DrawerProvider } from './providers/drawer';
import Todo from './pages/Todo';
import Examples from './pages/Examples';
import { AlertProvider } from './providers/alert';
import SnackbarAlert from './components/SnackbarAlert';

function App() {
  return (
    <>
      <DrawerProvider>
        <AppBarMain />
        <AppDrawer />
      </DrawerProvider>

      <AlertProvider>
        <SnackbarAlert />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="examples" element={<Examples />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
