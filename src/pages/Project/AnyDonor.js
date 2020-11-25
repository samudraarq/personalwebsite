import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Projects/AnyDonor/Header/Header";
import CreatedUsing from "../../components/Projects/AnyDonor/CreatedUsing/CreatedUsing";
import Summary from "../../components/Projects/AnyDonor/Summary/Summary";
import Screenshots from "../../components/Projects/AnyDonor/Screenshots/Screenshots";
import { useEffect } from "react";

const AnyDonor = () => {
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

export default AnyDonor;
