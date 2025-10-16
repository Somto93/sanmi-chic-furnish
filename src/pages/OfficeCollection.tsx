import CollectionPage from "@/components/CollectionPage";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";

const OfficeCollection = () => {
  const products = [
    {
      image: office1,
      title: "Executive Office Suite",
      description: "Premium desk and chair set for professional environments",
    },
    {
      image: office2,
      title: "Modern Workstation",
      description: "Ergonomic office furniture with integrated storage solutions",
    },
    {
      image: office1,
      title: "Classic Office Desk",
      description: "Traditional wood desk with leather chair",
    },
    {
      image: office2,
      title: "Contemporary Office Set",
      description: "Light wood finish perfect for modern office spaces",
    },
  ];

  return (
    <CollectionPage
      title="Office Furniture"
      description="Professional workspace essentials designed for productivity and comfort"
      products={products}
    />
  );
};

export default OfficeCollection;
