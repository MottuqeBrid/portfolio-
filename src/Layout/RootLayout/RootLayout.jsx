import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Home/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div data-theme="light" className="min-h-screen w-full bg-base-100">
      <header className="sticky top-0 z-50 bg-base-100 ">
        <Navbar />
      </header>
      <main className="container mx-auto ">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
