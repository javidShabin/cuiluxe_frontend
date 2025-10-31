import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductTypes from "../components/ProductType";
import ShowWork from "../components/ShowWork";
import Workflow from "../components/Workflow";

import About from "./About";
import ProductSection from "./Products";
import Services from "./Services";

export const Home = () => {
  const user = { name: "Ramshiya" };
  const products = [
    { name: "Cooking Pan", price: 499, quantity: 1 },
    { name: "Knife Set", price: 299, quantity: 2 },
  ];
  return (
    <>
      <Hero />
      <About />
      <Workflow />
      <ProductTypes />
      <ShowWork />
      <Services />
      <Footer />
    </>
  );
};
