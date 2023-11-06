import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import SignUp from "../Pages/SignUp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SignIn from "../Pages/SignIn";


const Home = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="https://manoj93604.github.io/ChronoHub" element={<Welcome />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
};

export default Home;