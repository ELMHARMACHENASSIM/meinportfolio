import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RefreshAOS from "./RefreshAOS";

const Layout = () => {
  return (
    <>
    <RefreshAOS />
    <Header/>
    <main>
      <Outlet />
    </main>
    <Footer/>
    </>
  );
};

export default Layout;
