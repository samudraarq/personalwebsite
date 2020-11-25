import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Projects/Talikasih/Header/Header";
import CreatedUsing from "../../components/Projects/Talikasih/CreatedUsing/CreatedUsing";
import Summary from "../../components/Projects/Talikasih/Summary/Summary";
import Screenshots from "../../components/Projects/Talikasih/Screenshots/Screenshots";
import { useEffect } from "react";

const Talikasih = () => {
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

export default Talikasih;
