import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';
import Workspace from '../components/Dashboard/Workspace';
import Navigation from '../components/Dashboard/Navigation';

const Dashboard = () => {
  return (
   
      
      <div className="flex flex-col flex-grow">
        <Header />
        <Navigation/>
        <div className="flex h-screen">
          <Sidebar />
          <Workspace />
        </div>
       
      </div>
  
  );
};

export default Dashboard;
