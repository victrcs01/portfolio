// src/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../components/common/Navbar.tsx'
import Footer from '../components/common/Footer.tsx';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
