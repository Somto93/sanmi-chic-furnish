import CollectionPage from "@/components/CollectionPage";
import diningSet1 from "@/assets/dining-set-1.jpg";
import diningSet2 from "@/assets/dining-set-2.jpg";

const DiningCollection = () => {
  const products = [
    {
      image: diningSet1,
      title: "Classic Walnut Dining Set",
      description: "Elegant 6-seater dining set with premium walnut finish",
    },
    {
      image: diningSet2,
      title: "Luxury Round Dining Set",
      description: "Modern round table with upholstered chairs",
    },
    {
      image: diningSet1,
      title: "Traditional Dining Collection",
      description: "Timeless design with comfortable seating for family gatherings",
    },
    {
      image: diningSet2,
      title: "Contemporary Dining Set",
      description: "Sleek and sophisticated dining furniture for modern homes",
    },
  ];

  return (
    <CollectionPage
      title="Dining Collections"
      description="Elegant dining sets designed for memorable gatherings and family meals"
      products={products}
    />
  );
};

export default DiningCollection;
