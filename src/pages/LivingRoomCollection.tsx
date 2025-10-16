import CollectionPage from "@/components/CollectionPage";
import sofa1 from "@/assets/sofa-1.jpg";
import sofa2 from "@/assets/sofa-2.jpg";

const LivingRoomCollection = () => {
  const products = [
    {
      image: sofa1,
      title: "Modern L-Shaped Sectional",
      description: "Spacious sectional sofa perfect for large living spaces",
    },
    {
      image: sofa2,
      title: "Classic Chesterfield Sofa",
      description: "Premium leather sofa with timeless elegance",
    },
    {
      image: sofa1,
      title: "Contemporary Fabric Sofa",
      description: "Comfortable and stylish seating for modern living rooms",
    },
    {
      image: sofa2,
      title: "Luxury Leather Collection",
      description: "Handcrafted leather furniture for sophisticated spaces",
    },
  ];

  return (
    <CollectionPage
      title="Living Room"
      description="Luxurious sofas and seating solutions for ultimate comfort and style"
      products={products}
    />
  );
};

export default LivingRoomCollection;
