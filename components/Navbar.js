import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const handleBookClassClick = () => {
    window.open("https://wa.me/919226943621", "_blank");
  };

  return (
    <nav>
      <div className="left-nav">
        <Link href="/" passHref>
          <a title="Home - Prashantam Yoga">Home</a>
        </Link>
        <Link href="/blog" passHref>
          <a title="Blog - Prashantam Yoga">Blog</a>
        </Link>
        <Link href="/contact" passHref>
          <a title="Contact Us - Prashantam Yoga">Contact</a>
        </Link>
      </div>

      <div className="website-title">
        <img
          alt="Prashantam Yoga Main Logo"
          src="/images/logo/Prashantamyoga_main_logo_navbar.png"
          className="h-[5rem] w-auto font-open-sans font-bold my-2 md:my-1"
        />
      </div>

      <h1
        style={{ display: "none" }}
        className="website-title font-open-sans font-bold my-2 md:my-1"
      >
        Prashantam Yoga Classes - Find Your Inner Peace
      </h1>

      <div className="right-nav">
        <button
          className="bg-green-500 hover:text-gray-500 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
          style={{ display: "flex", alignItems: "center" }}
          onClick={handleBookClassClick}
          title="Book Your Yoga Class via WhatsApp"
        >
          <FaWhatsapp className="m-1" />
          Book your class
        </button>
      </div>
    </nav>
  );
};

export default Navbar;