import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div  style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        padding: "40px",
      }}>
         <Link to="/">
      <img
        src={logo}
        alt="Anime Oasis Logo"
        style={{ width: "150px", marginBottom: "20px", }}
      />
      </Link>
      <h1>Privacy Policy</h1>
      <p>Last updated: [23-05-2024]</p>

      <h2>Introduction</h2>
      <p>
        Welcome to AnimeOasis! Your privacy is very important to us. This
        privacy policy document outlines the types of personal information
        that are received and collected by AnimeOasis and how it is used.
      </p>

      <h2>Information Collection and Use</h2>
      <p>
        AnimeOasis does not collect any personal data from its users. We do
        not require you to provide any information to access our website and
        enjoy our content. Your browsing experience on AnimeOasis is
        completely anonymous.
      </p>

      <h2>Cookies</h2>
      <p>
        AnimeOasis does not use cookies or similar tracking technologies to
        track user activity. Your visit to our website is private and not
        monitored.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our website may contain links to other sites that are not operated by
        us. If you click on a third-party link, you will be directed to that
        third party's site. We strongly advise you to review the privacy
        policy of every site you visit. We have no control over and assume no
        responsibility for the content, privacy policies, or practices of any
        third-party sites or services.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify
        you of any changes by posting the new Privacy Policy on this page. We
        advise you to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact
        us at: [Your Contact Information]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
