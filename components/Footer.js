import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          I am Prashant Madane, a yoga teacher with over 5 years of experience.
          I hold an M.A. in Yogashastra and a diploma from Kaivalyadham Yoga
          Institute, Lonavala. I specialize in weight loss, stress management,
          general fitness, and therapeutic yoga, helping students achieve their
          wellness goals.
        </p>
      </div>
      <div>
        <div className="social">
          <a
            href="https://www.instagram.com/prashantm_yoga?igsh=M3lweHNuNnI3Z3lx"
            className="social-icons instagram"
             title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/prashant.madane.353?mibextid=ZbWKwL"
            className="social-icons facebook"
             title="Facebook"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://twitter.com/your_twitter_handle"
            className="social-icons FaYoutube"
             title="Youtube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-madane-5b3954188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="social-icons linkedin"
             title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="logo">
          <Image
            src="/images/logo-nameless-small.png"
            alt="logo"
            width={1420}
            height={1000}
          />
        </div>
      </div>
      <div className="footer-nav">
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
     
    </footer>
  );
};

export default Footer;
