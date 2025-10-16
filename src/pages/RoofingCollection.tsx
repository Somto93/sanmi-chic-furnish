import CollectionPage from "@/components/CollectionPage";
import roofing1 from "@/assets/roofing-1.jpg";
import roofing2 from "@/assets/roofing-2.jpg";

const RoofingCollection = () => {
  const products = [
    {
      image: roofing1,
      title: "Clay Roof Tiles",
      description: "Traditional terracotta tiles for Mediterranean-style homes",
    },
    {
      image: roofing2,
      title: "Metal Roofing Sheets",
      description: "Durable corrugated metal panels for modern buildings",
    },
    {
      image: roofing1,
      title: "Premium Tile Collection",
      description: "High-quality clay tiles with lasting durability",
    },
    {
      image: roofing2,
      title: "Contemporary Metal Roofing",
      description: "Sleek metal roofing systems for commercial and residential use",
    },
  ];

  return (
    <CollectionPage
      title="Roofing Solutions"
      description="Durable and stylish roofing materials for lasting protection"
      products={products}
    />
  );
};

export default RoofingCollection;
