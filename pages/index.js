import Head from "next/head";
import Image from "next/image";
import Testimonial from "../components/Testimonial";
import styles from "../styles/Home.module.css";
import Gallery from "../components/Gallery";
import { useEffect, useState } from "react";

const images = [
  "/images/prashant/carousel/Prashantam_Y.jpg",
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
    // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>prashant M Yoga</title>
        <meta
          name="description"
          content="Prashant M Yoga, online restorative yoga classes"
        />
        <link rel="icon" href="/favicon.ico" />
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
                "Nurture Mind and Body at Home: Traditional and Therapeutic
                Yoga."
              </span>
            </p>
          </div>
          <div className={styles.heroPrice}>
            <h3>Free</h3>
            <p>Trial Sessions</p>
          </div>
        </div>

        <div className={styles.info}>
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
              alt="quote marks"
              className={`${styles.meditation} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoRestorative}>
            <h2>Therapeutic Yoga</h2>
            <p>
              Therapeutic Yoga Come and join me online for a therapeutic class
              full of healing and relaxation. Everyone is very welcome and if
              you have never tried yoga before, come and experience the benefits
              from the comfort of your home!
            </p>
            <img
              src="./images/lotus.svg"
              alt="lotus"
              className={`${styles.lotus} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoQuote}>
            <p>
              &quot; Yoga is the journey of the self, through the self, to the
              self.&quot; <br />- The Bhagavad Gita
            </p>
            <img
              src="./images/quote-right.svg"
              alt="quote marks"
              className={`${styles.quoteMarks} ${styles.infoImg}`}
            />
          </div>
        </div>

        <div className={styles.infoOverview}>
          <div className={styles.infoOverviewImg}>
            <Image
              src="/images/prashant/dhyanmudra_prashant_yoga.jpeg"
              alt="yoga easy pose"
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
              promote mental well-being and emotional resilience.{" "}
            </p>{" "}
            <p>
              <span>General Fitness Batch</span>
              <br />
              Maintain and improve overall fitness with a mix of
              strength-building, cardiovascular exercises, and
              flexibility-enhancing stretches.{" "}
            </p>{" "}
            <p>
              <span>Traditional Yoga</span>
              <br />
              Experience classical yoga postures, breath control, and
              meditation, staying true to ancient teachings for holistic
              well-being.{" "}
            </p>
            <p>
              <span>Therapeutic Yoga</span>
              <br />A gentle, adaptive approach for individuals with health
              issues or injuries, focusing on restorative asanas and mindfulness
              for healing.
            </p>
          </div>
        </div>

        <div className={styles.mailingListSection}>
          <div className={styles.mailingList}>
          
        <Testimonial/>

           {/*  <p>
              Would you like free affirmation cards to promote happiness and
              self worth? Register for my monthly newsletter and it’ll arrive
              straight in your inbox. You’ll also find out first when my classes
              start.
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
            </form> */}


            
          </div>
        </div>
        <Gallery />
      </main>
    </>
  );
}
