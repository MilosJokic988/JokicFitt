import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet /> {/* OVDE SE PRIKAZUJU DEČIJE RUTE */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
