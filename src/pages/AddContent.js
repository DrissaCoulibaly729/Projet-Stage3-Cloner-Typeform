import React from 'react';
import AddContentPage from '../components/Card/AddContentPage';
import Navbar from '../components/Card/Navbar';


function AddContent() {
  return (
    <div >
    <Navbar />
    <div className="min-h-screen mt-0 m-5 rounded-[10px] bg-stone-100 flex items-center justify-center">
      <AddContentPage />
    </div>
    </div>
  );
}

export default AddContent;
