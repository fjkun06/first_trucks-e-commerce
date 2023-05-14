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

  //scroll useEffect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main lang="en-US">
      <Navbar isOpen={isOpen} handleClick={handleClick} set={setIsOpen} />
      <section id="content" onClick={() => setIsOpen(false)}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
