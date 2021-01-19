import React from "react";
import SocialIcon from "./Components/SocialIcon";
import BGI from "./Image/Shing.jpg";
import List from "./List";
import Paragraph from "./Paragraph";

const Portfolio = () => {
  return (
    <div
      className="main-container"
      style={{
        padding: "100px",
        borderTop: "5px solid #7ed6df",
        backgroundColor: "white",
        minHeight: "100vh",
        fontFamily: "Rubik, sans-serif",
        fontSize: "18px",
        color: "#535c68",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${BGI})`,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundSize: "cover",
          backgroundPosition: "50% 70%",
          marginBottom: "60px",
        }}
      ></div>

      <h1
        style={{
          fontSize: "40px",
          marginTop: 0,
          marginBottom: "1rem",
        }}
      >
        Hey! I'm Shing Jondonero 🙋🏻‍♀
      </h1>

      <div className="mb socials">
        <SocialIcon icon="github" link="https://github.com/shingee" />
        <SocialIcon
          icon="linkedin"
          link="https://www.linkedin.com/in/shing-jondonero-👩🏻‍🏫👩🏻‍💻-660b711a6"
        />
        <SocialIcon
          icon="instagram"
          link="https://www.instagram.com/shing.js/"
        />
        <SocialIcon icon="twitter" link="https://twitter.com/shingjs" />
      </div>

      <Paragraph>
        I graduated with a bachelor's degree in Music Education. I was a
        kindergarten teacher 👩🏻‍🏫 for 4 years here in Thailand.
        <br />
        <br /> Then I decided to learn how to code 👩🏻‍💻, I am now an aspiring Web
        Developer.
        <br />
        <br /> Here's what I've done so far:
      </Paragraph>

      <List
        items={[
          <span>
            <a href="https://github.com/shingee/news-dashboard">
              News Dashboard
            </a>{" "}
            — 📺 A simple rotating news dashboard for feedly.
          </span>,
          <a href="https://codepen.io/Shing08">My freeCodeCamp Projects</a>,
        ]}
      />

      <Paragraph>My freeCodeCamp Certificates:</Paragraph>
      <List
        items={[
          <a href="https://www.freecodecamp.org/certification/shing/responsive-web-design">
            Responsive Web Design
          </a>,
          <a href="https://www.freecodecamp.org/certification/shing/front-end-libraries">
            Front End Libraries
          </a>,
          <a href="https://www.freecodecamp.org/certification/shing/javascript-algorithms-and-data-structures">
            JavaScript Algorithms and Data Structures
          </a>,
        ]}
      />
    </div>
  );
};

export default Portfolio;
