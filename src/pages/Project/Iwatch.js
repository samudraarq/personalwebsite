import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Projects/Iwatch/Header/Header";
import CreatedUsing from "../../components/Projects/Iwatch/CreatedUsing/CreatedUsing";
import Summary from "../../components/Projects/Iwatch/Summary/Summary";
import Screenshots from "../../components/Projects/Iwatch/Screenshots/Screenshots";
import { useEffect } from "react";

const Iwatch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <CreatedUsing />
      <Summary />
      <Screenshots />
      <Footer />
    </>
  );
};

export default Iwatch;
