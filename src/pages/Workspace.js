import React from 'react';
import Navbar from '../components/Workspace/Navbar';
import SidebarG from '../components/Workspace/SidebarG';
import ContentHeader from '../components/Workspace/ContentHeader';
import ContentBody from '../components/Workspace/ContentBody';
import SidebarD from '../components/Workspace/SidebarD';


const Workspace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SidebarG/>
        <main className="flex-1">
          <ContentHeader />
          <ContentBody />
        </main>
        <SidebarD />
      </div>
    </div>
  );
};

export default Workspace;
