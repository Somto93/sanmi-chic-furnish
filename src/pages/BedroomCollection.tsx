import CollectionPage from "@/components/CollectionPage";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";

const BedroomCollection = () => {
  const products = [
    {
      image: bedroom1,
      title: "Luxury King Bedroom Set",
      description: "Complete bedroom suite with wardrobe and nightstands",
    },
    {
      image: bedroom2,
      title: "Modern Minimalist Set",
      description: "Contemporary platform bed with sleek oak finish",
    },
    {
      image: bedroom1,
      title: "Classic Bedroom Collection",
      description: "Elegant walnut bedroom furniture with integrated lighting",
    },
    {
      image: bedroom2,
      title: "Scandinavian Style Set",
      description: "Clean lines and natural wood for modern comfort",
    },
  ];

  return (
    <CollectionPage
      title="Bedroom Sets"
      description="Comfortable and stylish bedroom furniture for restful living"
      products={products}
    />
  );
};

export default BedroomCollection;
