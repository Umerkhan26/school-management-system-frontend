// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   const footerStyle = {
//     backgroundColor: "#343a40",
//     color: "#ffffff",
//     textAlign: "center",
//     padding: "20px 0",
//   };

//   const linkStyle = {
//     color: "#ffffff",
//     textDecoration: "none",
//   };

//   const linkHoverStyle = {
//     textDecoration: "underline",
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     flexWrap: "wrap",
//     marginBottom: "10px",
//   };

//   const sectionStyle = {
//     marginBottom: "-17px",
//   };

//   const copyRightStyle = {
//     marginTop: "10px",
//   };

//   return (
//     <footer style={footerStyle}>
//       <div
//         className="elementor-social-icons-wrapper elementor-grid"
//         style={{
//           display: "flex",
//           justifyContent: "end",
//           position: "relative",
//           right: "64px",
//         }}
//       >
//         <span
//           className="elementor-grid-item"
//           style={{ margin: "0 10px", color: "white" }}
//         >
//           <a
//             className="elementor-icon elementor-social-icon-facebook"
//             href="https://facebook.com"
//             style={{ color: "white" }}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebook size={24} />
//           </a>
//         </span>
//         <span
//           className="elementor-grid-item"
//           style={{ margin: "0 10px", color: "white" }}
//         >
//           <a
//             className="elementor-icon elementor-social-icon-instagram "
//             style={{ color: "white" }}
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram size={24} />
//           </a>
//         </span>
//         <span className="elementor-grid-item" style={{ margin: "0 10px" }}>
//           <a
//             className="elementor-icon elementor-social-icon-youtube"
//             style={{ color: "white" }}
//             href="https://youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaYoutube size={24} />
//           </a>
//         </span>
//         <span className="elementor-grid-item" style={{ margin: "0 10px" }}>
//           <a
//             className="elementor-icon elementor-social-icon-twitter"
//             style={{ color: "white" }}
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTwitter size={24} />
//           </a>
//         </span>
//       </div>
//       <div style={containerStyle}>
//         <div style={sectionStyle}>
//           <h5>School Management System</h5>
//           <p>
//             Your one-stop solution for managing school operations efficiently.
//           </p>
//         </div>
//         <div style={sectionStyle}>
//           <h5>Quick Links</h5>
//           <ul
//             style={{ listStyleType: "none", padding: 0, position: "relative" }}
//           >
//             <li>
//               <Link to="/" style={linkStyle}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" style={linkStyle}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" style={linkStyle}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div style={{ position: "relative", bottom: "-18px" }}>
//             <h5>Contact Info</h5>
//             <p>123 School St., Education City</p>
//             <p>Email: info@school.com</p>
//             <p>Phone: +123 456 7890</p>
//           </div>
//         </div>
//       </div>
//       <div style={copyRightStyle}>
//         <p>
//           &copy; {new Date().getFullYear()} School Management System. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: #426487; // Replace with your theme color if available

  @media (min-width: 640px) {
    padding-top: 4rem;
  }

  @media (min-width: 1024px) {
    padding-top: 6rem;
  }
`;

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 7xl;

  @media (min-width: 640px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap-y: 4rem;
  gap-x: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const LogoContainer = styled.div`
  padding-bottom: 20px;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 2.25rem;
  width: auto;
`;

const Description = styled.p`
  margin-top: 1.75rem;
  font-size: 1rem;
  line-height: 1.625;
  color: #ffffff;
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 2.25rem;
  gap: 0.75rem;
`;

// const SocialLinkItem = styled.li``;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: center;
  width: 2rem; /* Slightly larger for better visibility */
  height: 2rem; /* Slightly larger for better visibility */
  color: #ffffff; /* Change text color to white for better contrast */
  background-color: #aca4b7; /* Footer background color */
  border-radius: 50%; /* Use 50% for circular icons */
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #007bff; /* Light blue on hover for contrast */
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const SectionHeading = styled.h5`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; // Hover color for links
  }
`;

const ContactInfo = styled.div`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
`;

const Copyright = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 2rem;
  border-top: 1px solid #ffffff;
  padding-top: 1rem;
`;

const NewsletterContainer = styled.div`
  padding-left: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: span 1 / span 1;
    /* padding-left: 2rem; */
  }

  @media (min-width: 1024px) {
    grid-column: span 1 / span 1;
  }
`;

const NewsletterHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: White;
`;

const NewsletterForm = styled.form`
  margin-top: 1.5rem;
`;

const NewsletterInputContainer = styled.div`
  position: relative;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: #111827;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &:focus-visible {
    caret-color: #2563eb;
  }
`;

const NewsletterButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: blue;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #1d4ed8;
  }
`;

const Heading = styled.h2`
  color: black;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.5rem;
  margin-bottom: 5px;
  position: relative;
  right: -47px;
  bottom: 42px;
`;

const SubText = styled.p`
  color: #ffffff80;
  font-size: 0.9rem;
  margin-bottom: 0;
  position: relative;
  right: -47px;
  bottom: 47px;
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {/* Logo Section */}
          <LogoContainer>
            <LogoImage src="/src/assets/logo.jpeg" alt="Logo" />
            <div>
              <Heading>IQBAL VISION</Heading>
              <SubText>SCHOOL & COLLAGE</SubText>
            </div>
            <Description>
              Your one-stop solution for managing school operations efficiently.
            </Description>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank">
                <FaYoutube />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </LogoContainer>

          {/* Social Media Links */}

          {/* Quick Links Section */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <LinkList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/about">About Us</StyledLink>
              </li>
              <li>
                <StyledLink to="/contact">Contact</StyledLink>
              </li>
            </LinkList>
          </div>
          <div>
            <SectionHeading>Contact Info</SectionHeading>
            <ContactInfo>
              <p>123 School St., Education City</p>
              <p>Email: info@school.com</p>
              <p>Phone: +123 456 7890</p>
            </ContactInfo>
          </div>
          <NewsletterContainer>
            <NewsletterHeading>Email Us</NewsletterHeading>
            <NewsletterForm>
              <NewsletterInputContainer>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <NewsletterInput
                  type="email"
                  name="email-sub"
                  id="email"
                  placeholder="Enter your email"
                />
              </NewsletterInputContainer>
              <NewsletterButton type="submit">Subscribe</NewsletterButton>
            </NewsletterForm>
          </NewsletterContainer>
          {/* Contact Info Section */}
        </Grid>

        <Copyright>
          &copy; {new Date().getFullYear()} School Management System. All rights
          reserved.
        </Copyright>
      </Container>
    </Section>
  );
};

export default Footer;
