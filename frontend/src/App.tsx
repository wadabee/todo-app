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
import MockRegister from './pages/MockRegister';

function App() {
  return (
    <div className="App">
      <DrawerProvider>
        <AppBarMain />
        <AppDrawer />
      </DrawerProvider>

      <AlertProvider>
        <SnackbarAlert />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="examples" element={<Examples />} />
          <Route path="mock-register" element={<MockRegister />} />
        </Routes>
      </AlertProvider>
    </div>
  );
}

export default App;
