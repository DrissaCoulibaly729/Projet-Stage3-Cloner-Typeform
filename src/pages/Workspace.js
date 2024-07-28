import React from 'react';
import Navbar from '../components/Workspace/Navbar';
import SidebarG from '../components/Workspace/SidebarG';
import ContentHeader from '../components/Workspace/ContentHeader';
import ContentBody from '../components/Workspace/ContentBody';
import SidebarD from '../components/Workspace/SidebarD';

const Workspace = () => {
  return (
    <div className="overflow-hidden min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SidebarG />
        <div className="flex flex-col flex-1">
          <ContentHeader />
          <div className="flex-1 overflow-auto">
            <ContentBody />
          </div>
        </div>
        <SidebarD />
      </div>
    </div>
  );
};

export default Workspace;
