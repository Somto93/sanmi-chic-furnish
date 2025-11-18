import CollectionPage from "@/components/CollectionPage";
import sofa1 from "@/assets/sofa-1.jpg";
import sofa2 from "@/assets/sofa-2.jpg";
import sofa3 from "@/assets/sofa-3.jpg";
import sofa4 from "@/assets/sofa-4.jpg";
import sofa5 from "@/assets/sofa-5.jpg";
import sofa6 from "@/assets/sofa-6.jpg";
import sofa7 from "@/assets/sofa-7.jpg";
import sofa8 from "@/assets/sofa-8.jpg";

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
      image: sofa3,
      title: "Contemporary Orange Sofa",
      description: "Vibrant modern sofa with striped cushions for a bold statement",
    },
    {
      image: sofa4,
      title: "Luxury Sectional Set",
      description: "Elegant L-shaped sectional with ornate silver coffee table",
    },
    {
      image: sofa5,
      title: "Modern Grey Daybed",
      description: "Sleek contemporary sofa with geometric patterned throw",
    },
    {
      image: sofa6,
      title: "Striped Chesterfield Sofa",
      description: "Classic design with modern striped upholstery and gold accents",
    },
    {
      image: sofa7,
      title: "White Sofa with Purple Cushions",
      description: "Clean contemporary design with vibrant purple accent pillows",
    },
    {
      image: sofa8,
      title: "Royal Blue Velvet Sofa Set",
      description: "Luxurious blue velvet sofa with matching ottoman and cushions",
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
