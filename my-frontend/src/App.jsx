import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';


function App() {
 

  return (
    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 pt-24">
          <Search />
          <Routes>
            <Route path="/" element={<JobList  />} />
            <Route path="/jobs/:jobId" element={<JobDetails  />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
