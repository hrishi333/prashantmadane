import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const handleBookClassClick = () => {
    window.open("https://wa.me/919226943621", "_blank");
  };
  return (
    <nav>
      <h1 className="website-title  font-open-sans font-bold mt-4 md:mt-1">
        <span className="text-indigo-900 text-4xl font-bold">P</span>
        <span className="text-indigo-900 text-3xl font-bold">rashanta</span>
        <span className="text-indigo-900 text-4xl font-bold">M</span>
        <span className="text-orange-600 text-3xl font-bold">Yoga</span>
      </h1>
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

      <div className="right-nav">
        <button
          className="bg-green-500 hover:text-gray-500 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
          style={{ display: "flex", alignItems: "center" }}
          onClick={handleBookClassClick}
        >
          <FaWhatsapp className="m-1" />
          Book your class
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
