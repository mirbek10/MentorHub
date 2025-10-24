import React from "react";
import Card from "./ui/card/Card";
import Hero2 from "./ui/hero2/Hero2";
import Banner from "./ui/banner/Banner";
import Courses from "./ui/courses/Courses.jsx";

function Home() {
    return (
        <div>
            <Banner/>
            <Card/>
            <Hero2/>
            <Courses/>
        </div>
    );
}

export default Home;
