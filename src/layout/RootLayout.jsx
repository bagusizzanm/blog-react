import React from "react";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col min-h-screen px-4 py-2 md:px-6 lg:px-12 xl:px-24">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
