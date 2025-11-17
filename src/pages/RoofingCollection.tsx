import CollectionPage from "@/components/CollectionPage";
import roofing1 from "@/assets/roofing-1.jpg";
import roofing2 from "@/assets/roofing-2.jpg";
import roofing3 from "@/assets/roofing-3.jpg";
import roofing4 from "@/assets/roofing-4.jpg";
import roofing5 from "@/assets/roofing-5.jpg";
import roofing6 from "@/assets/roofing-6.jpg";
import roofing7 from "@/assets/roofing-7.jpg";
import roofing8 from "@/assets/roofing-8.jpg";
import roofing9 from "@/assets/roofing-9.jpg";

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
      image: roofing3,
      title: "Multi-Peak Timber Roofing",
      description: "Custom pyramid-style timber roof structure with horizontal cladding",
    },
    {
      image: roofing4,
      title: "Timber Truss Framework",
      description: "Professional timber roof truss installation for complex roof designs",
    },
    {
      image: roofing5,
      title: "Hip Roof Framework",
      description: "Expert carpentry for hip roof timber frame construction",
    },
    {
      image: roofing6,
      title: "Premium Tile Roofing",
      description: "Elegant dark blue textured roof tiles with superior weather protection",
    },
    {
      image: roofing7,
      title: "Timber Roof Construction",
      description: "Custom timber roof framework installation for residential buildings",
    },
    {
      image: roofing8,
      title: "Modern Tile Roofing",
      description: "Contemporary stone-coated steel tile roofing system",
    },
    {
      image: roofing9,
      title: "Tile Roofing Installation",
      description: "Professional installation of premium architectural roof tiles",
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
