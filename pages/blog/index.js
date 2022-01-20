import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPvh9ILI1N7j3-Mt_eH-uvkX13cdwoDaI",
  authDomain: "yoga-website-4eafe.firebaseapp.com",
  projectId: "yoga-website-4eafe",
  storageBucket: "yoga-website-4eafe.appspot.com",
  messagingSenderId: "343308541111",
  appId: "1:343308541111:web:2d5d9292baab0b264b4132",
};



export async function getStaticProps() {
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const colRef = collection(db, "posts");
  const data = await getDocs(colRef)
    .then((snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      console.log(posts);
      return posts
    })
    .catch((err) => {
      console.log;
    });

  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //const data = await res.json();

  return {
    props: { posts: data },
  };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <h1> Blog posts go here.</h1>
      {posts.map((post) => (
        <div>
          <Link href={`/blog/${post.id}`} key={post.id}>
            <a className={styles.postTitle}>{post.title}</a>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
