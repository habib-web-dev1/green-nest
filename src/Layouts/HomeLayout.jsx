import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Container from "../Components/Container";
import Header from "../Components/Header";

const HomeLayout = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default HomeLayout;
