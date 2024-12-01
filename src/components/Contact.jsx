import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import bg4 from "../assets/bg4.jpg";
// import bg1 from "../assets/bg1.jpg";

const Contact = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  const sectionStyles = {
    position: "relative",
    backgroundImage: `url(${bg4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "550px",
    maxHeight: "550px", // Set the maximum height to 250px
    color: "white",
    display: "flex",
    alignItems: "center",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity as needed
  };

  const textStyles = {
    position: "relative",
    zIndex: 1,
    padding: "20px", // Add padding to ensure the text is displayed correctly
  };

  //   const pStyle = {
  //     fontWeight: 400,
  //     color: "#5c5c77",
  //     fontSize: "16px",
  //     lineHeight: "1.9",
  //     fontFamily: "Poppins, sans-serif",
  //     margin: "0px 0px 16px",
  //   };

  const p1Style = {
    color: "#d6d6e0 !important",
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    lineHeight: "1.9",
    margin: "0px 0px 16px",
  };

  return (
    <>
      <header
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundImage: "linear-gradient(#ffffff, #f9f7f9)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          paddingLeft: "20px",
          paddingRight: "20px",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000, // Ensure the header is above other content
        }}
      >
        <style>
          {`
            .admin-register-btn,
            .signin-btn {
              background-color: #ffffff; 
              border-color: #007bff; 
              color: #0d6efd;
            }

            .admin-register-btn:hover,
            .signin-btn:hover {
              background-color: #007bff; 
              color: white;
            }
          `}
        </style>
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center"
            href="/"
            style={{ marginRight: "20px" }}
          >
            <img
              src="/src/assets/logo.jpeg"
              alt="logo"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              <h2
                className="text-black fw-bold mb-0"
                style={{ fontSize: "1.5rem", marginBottom: "5px" }}
              >
                IQBAL VISION
              </h2>
              <p
                className="text-muted mb-0"
                style={{ fontSize: "0.9rem", color: "#ffffff80" }}
              >
                SCHOOL & COLLAGE
              </p>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  onClick={handleHomeClick}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  href="/about"
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  href="/contact"
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary me-2"
              onClick={handleLoginClick}
            >
              Sign In
            </button>
            <button className="btn admin-register-btn ms-2">
              Admin Register
            </button>
          </div>
        </div>
      </header>

      <section
        className="page-title-section"
        style={{ ...sectionStyles, marginTop: "80px" }}
      >
        <div style={overlayStyles}></div>
        <div className="container" style={textStyles}>
          <div className="row">
            <div className="col-md-8">
              <ul className="list-inline custom-breadcrumb">
                <li className="list-inline-item">
                  <a
                    className="h2 text-danger font-secondary"
                    href="/contact"
                    style={{
                      textDecoration: "none",
                      fontSize: "40px",
                      fontWeight: "bolder",
                      position: "relative",
                      bottom: "-8px",
                    }}
                  >
                    Contact Us
                  </a>
                </li>
                <li className="list-inline-item text-white h3 font-secondary"></li>
              </ul>
              <p className="text-lighten" style={p1Style}>
                Get in touch with us! If you have any questions or need further
                information, feel free to contact us through the form below or
                visit our office. We look forward to hearing from you!
                <br />
                <br />
                We value your input and are committed to providing excellent
                customer service. Your satisfaction is our top priority. Reach
                out to us today and let us assist you in the best possible way
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray" style={{ paddingTop: "90px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title" style={{ marginBottom: "30px" }}>
                Contact Us
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <form action="#">
                <input
                  type="text"
                  style={{
                    height: "60px",
                    background: "#fff",
                    borderRadius: "0px",
                    paddingLeft: "25px",
                  }}
                  className="form-control mb-3"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  style={{
                    height: "60px",
                    background: "#fff",
                    borderRadius: "0px",
                    paddingLeft: "25px",
                  }}
                  className="form-control mb-3"
                  id="mail"
                  name="mail"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  style={{
                    height: "60px",
                    background: "#fff",
                    borderRadius: "0px",
                    paddingLeft: "25px",
                  }}
                  className="form-control mb-3"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
                <textarea
                  style={{ height: "200px", padding: "20px" }}
                  name="message"
                  id="message"
                  className="form-control mb-3"
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="submit"
                  style={{ fontSize: "16px", padding: "15px 40px" }}
                  value="send"
                  className="btn btn-danger"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            <div
              className="col-lg-5"
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
            >
              <p
                className="mb-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "1.9",
                  color: "#5c5c77",
                  margin: "0px, 0px, 48px",
                }}
              >
                You can contact us through the following channels:
                <br />
                <strong>Email</strong>: &nbsp; Send us an email at{" "}
                <span className="text-info">zakirmaeng@gmail.com</span>. We
                strive to respond to all inquiries within 24 hours.
                <br />
                <strong>Phone</strong>: &nbsp; Give us a call at{" "}
                <span className="text-info">+(92) 91 5602744,5602577</span>{" "}
                during our business hours. Our friendly team members are ready
                to assist you and provide any information you may need.
                <br />
                <strong>Online Contact Form</strong>: &nbsp; Fill out the
                contact form on our website{" "}
                <a
                  //   href="https://www.peshawarmodel.edu.pk/"
                  className="text-info"
                >
                  website Link
                </a>
                . Simply provide your name, email address, and a brief message,
                and we will get back to you as soon as possible.
                <br />
                <strong>Social Media</strong>: &nbsp; Connect with us on our
                social media platforms{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100064063721071&sk"
                  className="text-info"
                >
                  Facebook Link
                </a>
                . Stay updated with our latest news, events, and promotions.
                Feel free to send us a direct message, and we will respond
                promptly.
                <br />
                <br />
              </p>

              <a
                href="tel:+8802057843248"
                className="text-color h5 d-block"
                style={{ marginBottom: "10px" }}
              >
                +(92) 91 5602744,5602577
              </a>
              <a
                href="mailto:yourmail@email.com"
                className="mb-5 text-color h5 d-block"
                style={{ marginBottom: "10px" }}
              >
                {/* info@peshawarmodel.edu.pk */}
              </a>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "1.9",
                  cursor: "pointer",
                  color: "#5c5c77",
                  margin: "0px, 0px, 48px",
                }}
              >
                Iqbal Vision School & Collage,
                <br />
                Peshawar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        {/* Google Map */}
        <div
          style={{
            width: "100%",
            border: "2px solid #cc4545",
            marginTop: "30px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.881845336511!2d71.43931567403409!3d33.94416692343218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91b3151fb1ce7%3A0xf73ed28ef3e06351!2sIqbal%20Vision%20school%20and%20college!5e0!3m2!1sen!2s!4v1722200438515!5m2!1sen!2s"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
