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
    console.log("layoutOpen: " + isOpen);
  };
  return (
    <main lang="en-US">
      <Navbar isOpen={isOpen} handleClick={handleClick} set={setIsOpen} />
      <section onClick={() => setIsOpen(false)}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
