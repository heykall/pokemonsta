import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import BackToTop from '../components/ui/BackToTop';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        {children || <Outlet />}
      </main>
      <BackToTop />
    </div>
  );
};

export default MainLayout;