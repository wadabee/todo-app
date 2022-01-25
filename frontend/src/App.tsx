import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AppBarMain from './components/AppBarMain';
import AppDrawer from './components/AppDrawer';
import { DrawerProvider } from './providers/drawer';
import Todo from './pages/Todo';
import Examples from './pages/Examples';

function App() {
  return (
    <div className="App">
      <DrawerProvider>
        <AppBarMain />
        <AppDrawer />
      </DrawerProvider>

      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="examples" element={<Examples />} />
      </Routes>
    </div>
  );
}

export default App;
