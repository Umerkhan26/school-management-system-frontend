import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import different images for each slide
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";

const StayConnectedWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
  border-top: 2px solid #ddd;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CarouselWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;

  .slick-prev,
  .slick-next {
    z-index: 10;
    color: #007bff;
    &:before {
      font-size: 1.5rem;
      color: #007bff;
    }
  }

  .slick-dots li button:before {
    color: #007bff;
  }

  .slick-slide {
    padding: 0 10px;
  }
`;

const SlideImage = styled.img`
  width: 100%; // Ensure the width is consistent with the container
  height: 300px; // Set a fixed height for each image
  object-fit: cover; // Ensures images maintain aspect ratio without distortion, clipping if necessary
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContactInfo = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const StayConnected = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StayConnectedWrapper>
      <Heading>Stay Connected!</Heading>
      <Description>
        Like us on{" "}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        and follow us on{" "}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        to stay up to date with all things Capitol Hill Day School.
      </Description>
      <CarouselWrapper>
        <Slider {...sliderSettings}>
          <div>
            <SlideImage src={img1} alt="Slide 1" />
          </div>
          <div>
            <SlideImage src={img2} alt="Slide 2" />
          </div>
          <div>
            <SlideImage src={img3} alt="Slide 3" />
          </div>
          <div>
            <SlideImage src={img4} alt="Slide 4" />
          </div>
          <div>
            <SlideImage src={img5} alt="Slide 5" />
          </div>
          <div>
            <SlideImage src={img6} alt="Slide 6" />
          </div>
        </Slider>
      </CarouselWrapper>
      <ContactInfo>
        Capitol Hill Day School <br />
        210 South Carolina Avenue, SE <br />
        Washington, DC 20003 <br />
        Tel: 202.547.2244 | Fax: 202.543.4597
      </ContactInfo>
    </StayConnectedWrapper>
  );
};

export default StayConnected;
