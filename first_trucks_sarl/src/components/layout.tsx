import Footer from "@/stories/Footer";
import Navbar from "@/stories/Navbar";
import React from "react";
export interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main lang="en-US">
      <Navbar isOpen={isOpen} handleClick={handleClick}/>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
