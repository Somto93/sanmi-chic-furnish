import CollectionPage from "@/components/CollectionPage";
import windows1 from "@/assets/windows-1.jpg";
import windows2 from "@/assets/windows-2.jpg";

const WindowsCollection = () => {
  const products = [
    {
      image: windows1,
      title: "Modern Sliding Windows",
      description: "Floor-to-ceiling aluminum windows for contemporary spaces",
    },
    {
      image: windows2,
      title: "Classic Wooden Windows",
      description: "Traditional casement windows with elegant wooden frames",
    },
    {
      image: windows1,
      title: "Aluminum Frame Collection",
      description: "Sleek and energy-efficient windows with black frames",
    },
    {
      image: windows2,
      title: "Wood Frame Windows",
      description: "Timeless double-hung windows with premium wood finish",
    },
  ];

  return (
    <CollectionPage
      title="Windows"
      description="Premium windows that bring natural light and elegance to your home"
      products={products}
    />
  );
};

export default WindowsCollection;
