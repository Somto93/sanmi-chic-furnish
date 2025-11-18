import CollectionPage from "@/components/CollectionPage";
import diningSet1 from "@/assets/dining-set-1.jpg";
import diningSet2 from "@/assets/dining-set-2.jpg";
import diningSet3 from "@/assets/dining-set-3.jpg";
import diningSet4 from "@/assets/dining-set-4.jpg";
import diningSet5 from "@/assets/dining-set-5.jpg";
import diningSet6 from "@/assets/dining-set-6.jpg";
import diningSet7 from "@/assets/dining-set-7.jpg";

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
      image: diningSet3,
      title: "Modern Marble Top Dining Set",
      description: "Contemporary 8-seater with elegant marble finish and upholstered chairs",
    },
    {
      image: diningSet4,
      title: "Executive Glass Top Dining Set",
      description: "Luxurious glass table with ornate detailing and plush seating",
    },
    {
      image: diningSet5,
      title: "Contemporary 6-Seater Dining Set",
      description: "Modern dark wood dining set with comfortable high-back chairs",
    },
    {
      image: diningSet6,
      title: "Compact Black Dining Set",
      description: "Space-saving 5-piece dining set perfect for modern apartments",
    },
    {
      image: diningSet7,
      title: "Royal Carved Dining Collection",
      description: "Premium carved dining set with ornate detailing and rich finish",
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
