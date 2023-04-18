import React from "react";
import Header from "./Header";
import MovieCards from "../../Components/MovieCards";
import Billboard from "../../Components/Billboard/Billboard";
import Titles from "../../Components/Titles/Titles";
import Footer from "../../Components/Footer/Footer";
const Store = (props) => {
  return (
    <div>
      <Billboard />

      <Titles />
      <Footer/>
    </div>
  );
};

export default Store;
