import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  cartCount?: number;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount = 0 }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartCount={cartCount} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;