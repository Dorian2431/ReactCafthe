import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Layout(props) {
  return (
    <>
      <Header />
      {/* Outelet : La ou s'affiche les pages enfants */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
