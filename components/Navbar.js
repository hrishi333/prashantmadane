import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const handleBookClassClick = () => {
    window.open("https://wa.me/919226943621", "_blank");
  };
  return (
    <nav>
      <div className="left-nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <h1 className="website-title">Prashant M Yoga</h1>
      <div className="right-nav">
        <button style={{display:"flex", alignItems:"center"}} onClick={handleBookClassClick}><FaWhatsapp/>Book your class</button>
      </div>
    </nav>
  );
};

export default Navbar;
