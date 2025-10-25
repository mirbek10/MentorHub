import React from "react";
import Mentor from './ui/Mentor/mentor';
import Card from "./ui/card/Card";
// import Reviews from "./ui/reviews/Reviews";
import Hero2 from "./ui/hero2/Hero2";
import Banner from "./ui/banner/Banner";
import ContactForm from "./ui/ContactForm/ContactForm";
// import Reviews from "./ui/reviews/Reviews";
import MyPurchases from "../../Profile/myPurchases/MyPurchases.jsx";

function Home() {
  return (
    <div>
        <MyPurchases/>
      <Banner />
      <Card />
      <Hero2 />
      <Mentor/>
      {/* <Reviews/> */}
      <ContactForm/>
      {/* <Reviews/> */}
    </div>
  );
}

export default Home;
