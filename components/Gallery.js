export default function Gallery() {
  const myImages = [
    {
      index: 1,
      alt: "Matsyasana Pose prashant madane yoga",
      image: "matsyasana_prashant_yoga.jpeg",
    },
    {
      index: 2,
      alt: "Chakrasana Pose prashant madane yoga",
      image: "chakrasana_prashant_yoga.jpeg",
    },
    {
      index: 3,
      alt: "Tree pose prashant madane yoga",
      image: "tree_pose_prashant_yoga.jpeg",
    },
    {
      index: 4,
      alt: "Ekpaadasana pose prashant madane yoga",
      image: "ekpaadasana_prashant_yoga.jpeg",
    },
  ];

  return (
    <div className="gallery">
      {myImages.map((item) => (
        <img
          src={`../images/prashant/${item.image}`}
          alt={item.alt}
          key={item.index}
          className="gallery-img"
        />
      ))}
    </div>
  );
}
