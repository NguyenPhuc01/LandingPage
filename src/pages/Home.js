import React, { useEffect } from "react";

import styled from "styled-components";
import About from "../Component/About";
import Footer from "../Component/Footer";
import Header from "../Component/Header";


const Home = () => {
  return (
    <>
      <Header />
      <About/>
      <Footer/>
    </>
  );
};

export default Home;
