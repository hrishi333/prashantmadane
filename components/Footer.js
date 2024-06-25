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
            href="https://www.instagram.com/prashantam_yoga?igsh=c3ppNzN6M2s1eGEx"
            className="social-icons instagram"
             title="Instagram"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/prashant.madane.353"
            className="social-icons facebook"
             title="Facebook"
             target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.youtube.com/@prashantmadane7129"
            className="social-icons FaYoutube"
            title="Youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-madane-5b3954188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="social-icons linkedin"
             title="LinkedIn"
             target="_blank"
             rel="noopener noreferrer"
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
