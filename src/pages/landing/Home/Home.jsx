import React from "react";
import Card from "./ui/card/Card";
import Hero2 from "./ui/hero2/Hero2";
import Banner from "./ui/banner/Banner";
import ContactForm from "./ui/ContactForm/ContactForm";

function Home() {
  return (
    <div>
      <Banner />
      <Card />
      <Hero2 />
      <ContactForm/>
    </div>
  );
}

export default Home;
