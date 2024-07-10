//Dashboard.js

import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';
import Workspace from '../components/Dashboard/Workspace';

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header />
        <Sidebar />
        <Workspace />
      </div>
    </div>
  );
};

export default App;

