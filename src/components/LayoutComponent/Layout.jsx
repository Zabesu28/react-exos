import React from "react";
import Header from "../HeaderComponent/Header";
import Footer from "../FooterComponent/Footer";
import { Outlet } from "react-router-dom";

function Layout({ cart }) {
  return (
    <>
      <Header cart={cart}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
