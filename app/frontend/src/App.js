import React, { useState } from 'react';
import Delete from './components/Delete';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Search from './components/Search';
import SelectService from './components/SelectService';
import Update from './components/Update';

export default function App() {
  const [showService, setService] = useState('register');
  const selectService = ({ target }) => {
    setService(target.value);
  };
  return (
    <div className="w-full h-screen max-w-[1000px] mx-auto">
      <Navbar />
      <SelectService selectFunction={ (event) => selectService(event) } />
      {showService === 'register' && <Register />}
      {showService === 'update' && <Update />}
      {showService === 'search' && <Search />}
      {showService === 'delete' && <Delete />}
    </div>
  );
}
