import React, { useEffect } from "react";

import styled from "styled-components";
import About from "../Component/About";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import NavBar from "../Component/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Footer />
    </>
  );
};

export default Home;
