import React from 'react';
import Navbar from '../components/Workspace/Navbar';
import SidebarG from '../components/Workspace/SidebarG';
import ContentHeader from '../components/Workspace/ContentHeader';
import ContentBody from '../components/Workspace/ContentBody';
import SidebarD from '../components/Workspace/SidebarD';
import PageFormContent from '../components/FormContent/PageFormContent';

const FormContent = () => {
  return (
    <div className="relative">
      {/* PageFormContent Overlay */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1200px] h-[100vh] ">
          <PageFormContent />
        </div>
      </div>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 relative z-10">
          <SidebarG />
          <main className="flex-1">
            <ContentHeader />
            <ContentBody />
          </main>
          <SidebarD />
        </div>
      </div>
    </div>
  );
};

export default FormContent;
