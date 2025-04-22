import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "remixicon/fonts/remixicon.css"; // imports icons from remixicon library

import Footer from "./components/footer";
import ImageSlider from "./components/imageSlider";

const App = () => {
  return (
    <div>
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default App;
