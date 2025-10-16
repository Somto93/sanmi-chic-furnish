import CollectionPage from "@/components/CollectionPage";
import door1 from "@/assets/door-1.jpg";
import door2 from "@/assets/door-2.jpg";

const DoorsCollection = () => {
  const products = [
    {
      image: door1,
      title: "Carved Panel Door",
      description: "Solid mahogany with intricate carvings and brass hardware",
    },
    {
      image: door2,
      title: "Modern Flush Door",
      description: "Contemporary walnut door with sleek minimalist design",
    },
    {
      image: door1,
      title: "Traditional Wood Door",
      description: "Classic panel design with premium wood finish",
    },
    {
      image: door2,
      title: "Contemporary Door Set",
      description: "Clean lines perfect for modern architecture",
    },
  ];

  return (
    <CollectionPage
      title="Doors"
      description="Premium quality doors crafted for elegance and durability"
      products={products}
    />
  );
};

export default DoorsCollection;
