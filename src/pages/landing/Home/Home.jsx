import React from "react";
import Mentor from './ui/Mentor/mentor';
import Card from "./ui/card/Card";
import Reviews from "./ui/reviews/Reviews";
import Hero2 from "./ui/hero2/Hero2";
import Banner from "./ui/banner/Banner";
import Project from "./ui/projects/Project.jsx";
import ContactForm from "./ui/ContactForm/ContactForm";

function Home() {
  return (
    <div>
      <Banner />
      <Card />
      <Hero2 />
      <Mentor/>
      <Project/>
      <Reviews/>
      <ContactForm/>
    </div>
  );
}

export default Home;
