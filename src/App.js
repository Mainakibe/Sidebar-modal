import React from 'react';
import Modal from './Modal';
import SideBar from './Sidebar';
import Home from './Home';
import { SideBarAppProvider } from './context';
function App() {
  return (
    <SideBarAppProvider>
      <Home />
      <Modal />
      <SideBar />
    </SideBarAppProvider>
  );
}

export default App;
