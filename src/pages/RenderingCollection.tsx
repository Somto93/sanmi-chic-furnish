import CollectionPage from "@/components/CollectionPage";
import rendering1 from "@/assets/rendering-1.jpg";
import rendering2 from "@/assets/rendering-2.jpg";
import rendering3 from "@/assets/rendering-3.jpg";
import rendering4 from "@/assets/rendering-4.jpg";

const RenderingCollection = () => {
  const products = [
    {
      image: rendering1,
      title: "3D Exterior Visualization",
      description: "Photorealistic exterior renders that bring your architectural vision to life before construction begins",
    },
    {
      image: rendering2,
      title: "2D Floor Plans & Blueprints",
      description: "Precision-drafted floor plans with detailed dimensions for architects and developers",
    },
    {
      image: rendering3,
      title: "3D Interior Rendering",
      description: "Stunning interior visualizations that showcase every detail - from lighting to finishes",
    },
    {
      image: rendering4,
      title: "Commercial Property Renders",
      description: "High-impact visualizations perfect for real estate marketing and investor presentations",
    },
  ];

  return (
    <CollectionPage
      title="2D & 3D Rendering Services"
      description="Transform your ideas into stunning visual reality - where imagination meets photorealistic precision"
      products={products}
    />
  );
};

export default RenderingCollection;
