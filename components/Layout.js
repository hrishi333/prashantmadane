import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
      <div className="footer-copyright">
        <p>
          © 2024 Prashantam Yoga Classes. All rights reserved. Developed by{" "}
          <a href="https://www.linkedin.com/in/hrishikeshjoshi333/">Hrishikesh.</a>
        </p>
      </div>
    </div>
  );
};

export default Layout;
