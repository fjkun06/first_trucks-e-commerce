import Footer from "@/stories/Footer";
import Navbar from "@/stories/Navbar";
import React from "react";
export interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main lang="en-US">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
