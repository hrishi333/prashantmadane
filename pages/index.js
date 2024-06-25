import Head from "next/head";
import Image from "next/image";
import Testimonial from "../components/Testimonial";
import styles from "../styles/Home.module.css";
import Gallery from "../components/Gallery";
import { useEffect, useState } from "react";

const images = [
  "/images/prashant/carousel/cover_image_prashantamyoga.jpeg",
  "/images/prashant/carousel/Prashantam_Y2.jpg",
  "/images/prashant/carousel/Prashantam_Y.png",
  // Add more image paths as needed
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentGradient, setCurrentGradient] = useState(0);

  const gradient = [
    "linear-gradient(58deg, rgba(32, 153, 139, 0.6) 0%, rgba(32, 153, 139, 0.6) 100%)",
    "linear-gradient(58deg, rgba(255, 165, 0, 0.6) 0%, rgba(255, 165, 0, 0.6) 100%)",
    "linear-gradient(58deg, rgba(128, 0, 128, 0.6) 0%, rgba(128, 0, 128, 0.6) 100%)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentGradient((prevGrad) => (prevGrad + 1) % gradient.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>PrashantaM Yoga | Online Yoga Classes for Wellness</title>
        <meta
          name="description"
          content="Join PrashantaM Yoga for online yoga classes that nurture your mind and body. Experience traditional and therapeutic yoga from the comfort of your home."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P-yoga_nav_icon_design.png" />

        {/* Charset Meta Tag */}
        <meta charSet="UTF-8" />

        {/* Author Meta Tag */}
        <meta name="author" content="PrashantaM Yoga" />

        {/* Language Meta Tag */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Keywords Meta Tag */}
        <meta
          name="keywords"
          content="yoga, online yoga classes, therapeutic yoga, traditional yoga, yoga for wellness, PrashantaM Yoga, yoga from home, yoga for stress management, yoga for weight loss"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.prashantamyoga.com" />

        {/* Favicons and App Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="PrashantaM Yoga | Online Yoga Classes for Wellness"
        />
        <meta
          property="og:description"
          content="Join PrashantaM Yoga for online yoga classes that nurture your mind and body. Experience traditional and therapeutic yoga from the comfort of your home."
        />
        <meta
          property="og:image"
          content="/images/og_image_prashantamyoga.jpeg"
        />
        <meta property="og:url" content="https://www.prashantamyoga.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PrashantaM Yoga" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PrashantaM Yoga | Online Yoga Classes for Wellness"
        />
        <meta
          name="twitter:description"
          content="Join PrashantaM Yoga for online yoga classes that nurture your mind and body. Experience traditional and therapeutic yoga from the comfort of your home."
        />
        <meta
          name="twitter:image"
          content="/images/twitter_image_prashantamyoga.jpeg"
        />
        <meta name="twitter:site" content="@PrashantaMYoga" />

        {/* Social Media Links */}
        <link
          rel="author"
          href="https://www.linkedin.com/in/prashant-madane-5b3954188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <link rel="me" href="https://www.facebook.com/prashant.madane.353" />
        <link
          rel="me"
          href="https://www.instagram.com/prashantam_yoga?igsh=c3ppNzN6M2s1eGEx"
        />
        <link
          rel="me"
          href="https://x.com/PrashantaMYoga?t=_VgkhFpkdLmRhfQaGe3wgw&s=08"
        />
        <link rel="me" href="https://www.youtube.com/@prashantmadane7129" />

        {/* Content Security Policy */}
      {/*   <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://dummyimage.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-src 'self';"
        />
 */}
        {/* Referrer Policy */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </Head>
      <main>
        <div
          className={styles.hero}
          style={{
            backgroundImage: `${gradient[currentGradient]}, url(${images[currentImage]})`,
          }}
        >
          <div className={styles.heroCopy}>
            <p>
              <span>
                &quot;Nurture Mind and Body at Home: Traditional and Therapeutic
                Yoga.&quot;
              </span>
            </p>
          </div>
          <div className={styles.heroPrice}>
            <h3 className="text-3xl font-bold text-indigo-600">Free</h3>
            <p className="text-lg text-gray-600">Trial Sessions</p>
          </div>
        </div>

        <section className={styles.info}>
          <div className={styles.infoFlow}>
            <h2>Traditional Yoga</h2>
            <p>
              Join us online for a journey into traditional yoga, blending
              ancient practices to enhance your physical, mental, and spiritual
              health. Experience the harmony of postures, breathing, and
              meditation, finishing with a deep relaxation session.
            </p>
            <img
              src="./images/meditation-yoga.svg"
              alt="Yoga meditation illustration"
              className={`${styles.meditation} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoRestorative}>
            <h2>Therapeutic Yoga</h2>
            <p>
              Come and join me online for a therapeutic class full of healing
              and relaxation. Everyone is very welcome, and if you have never
              tried yoga before, come and experience the benefits from the
              comfort of your home!
            </p>
            <img
              src="./images/lotus.svg"
              alt="Lotus flower"
              className={`${styles.lotus} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoQuote}>
            <p>
              &quot;Yoga is the journey of the self, through the self, to the
              self.&quot; <br />- The Bhagavad Gita
            </p>
            <img
              src="./images/quote-right.svg"
              alt="Quote marks"
              className={`${styles.quoteMarks} ${styles.infoImg}`}
            />
          </div>
        </section>

        <section className={styles.infoOverview}>
          <div className={styles.infoOverviewImg}>
            <Image
              src="/images/prashant/dhyanmudra_prashant_yoga.jpeg"
              alt="Yoga easy pose in Dhyanmudra"
              width={2500}
              height={1667}
              objectFit="cover"
            />
          </div>
          <div className={styles.infoOverviewCopy}>
            <h2>Transform Your Life with Expert-Guided Yoga Classes</h2>
            <p>
              <span>Online Weight Loss Class</span>
              <br />
              Boost metabolism and burn calories with dynamic asanas and
              high-intensity sequences designed for effective weight loss.
            </p>
            <p>
              <span>Online Stress Management Class</span>
              <br />
              Alleviate stress with gentle asanas, pranayama, and meditation to
              promote mental well-being and emotional resilience.
            </p>
            <p>
              <span>General Fitness Batch</span>
              <br />
              Maintain and improve overall fitness with a mix of
              strength-building, cardiovascular exercises, and
              flexibility-enhancing stretches.
            </p>
            <p>
              <span>Traditional Yoga</span>
              <br />
              Experience classical yoga postures, breath control, and
              meditation, staying true to ancient teachings for holistic
              well-being.
            </p>
            <p>
              <span>Therapeutic Yoga</span>
              <br />A gentle, adaptive approach for individuals with health
              issues or injuries, focusing on restorative asanas and mindfulness
              for healing.
            </p>
          </div>
        </section>

        <section className={styles.mailingListSection}>
          <div className={styles.mailingList}>
            <Testimonial />
            {/* 
            <p>
              Would you like free affirmation cards to promote happiness and self-worth? Register for my monthly newsletter and it’ll arrive straight in your inbox. You’ll also find out first when my classes start.
            </p>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Name"
                className={styles.input}
              ></input>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              ></input>
              <button>Subscribe</button>
            </form> 
            */}
          </div>
        </section>
        <Gallery />
      </main>
    </>
  );
}
