import CollectionPage from "@/components/CollectionPage";
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";

const KitchenCollection = () => {
  const products = [
    {
      image: kitchen1,
      title: "Modern Kitchen Cabinets",
      description: "White and wood finish with island and organized storage",
    },
    {
      image: kitchen2,
      title: "Luxury Cabinet System",
      description: "Dark wood with glass doors and premium lighting",
    },
    {
      image: kitchen1,
      title: "Contemporary Kitchen Set",
      description: "Custom cabinetry with modern hardware and fixtures",
    },
    {
      image: kitchen2,
      title: "Traditional Cabinet Collection",
      description: "Rich wood tones with elegant glass door displays",
    },
  ];

  return (
    <CollectionPage
      title="Kitchen Cabinets"
      description="Custom kitchen solutions and premium cabinetry for your home"
      products={products}
    />
  );
};

export default KitchenCollection;
