import CollectionPage from "@/components/CollectionPage";
import door1 from "@/assets/door-1.jpg";
import door2 from "@/assets/door-2.jpg";
import door3 from "@/assets/door-3.jpg";
import door4 from "@/assets/door-4.jpg";
import door5 from "@/assets/door-5.jpg";
import door6 from "@/assets/door-6.jpg";
import door7 from "@/assets/door-7.jpg";
import door8 from "@/assets/door-8.jpg";
import door9 from "@/assets/door-9.jpg";
import door10 from "@/assets/door-10.jpg";
import door11 from "@/assets/door-11.jpg";

const DoorsCollection = () => {
  const products = [
    {
      image: door1,
      title: "Carved Panel Door",
      description: "Solid mahogany with intricate carvings and brass hardware",
    },
    {
      image: door2,
      title: "Modern Flush Door",
      description: "Contemporary walnut door with sleek minimalist design",
    },
    {
      image: door3,
      title: "Premium Walnut Door",
      description: "Vertical grain walnut with modern hardware and lock system",
    },
    {
      image: door4,
      title: "Artisan Carved Double Door",
      description: "Traditional double door with intricate African-inspired carvings",
    },
    {
      image: door5,
      title: "Classic Panel Entry Door",
      description: "Rich mahogany finish with raised panel design",
    },
    {
      image: door6,
      title: "Contemporary Security Door",
      description: "Modern design with glass accents and security locks",
    },
    {
      image: door7,
      title: "Traditional Solid Wood Door",
      description: "Ornate crown molding with brass lever handles",
    },
    {
      image: door8,
      title: "Modern Geometric Door",
      description: "Unique geometric panel design in premium hardwood",
    },
    {
      image: door9,
      title: "Multi-Panel Interior Door",
      description: "Classic four-panel design with warm wood finish",
    },
    {
      image: door10,
      title: "Horizontal Plank Door",
      description: "Contemporary light oak with sleek handle",
    },
    {
      image: door11,
      title: "Modern Interior Door",
      description: "Clean horizontal lines in natural oak finish",
    },
  ];

  return (
    <CollectionPage
      title="Doors"
      description="Premium quality doors crafted for elegance and durability"
      products={products}
    />
  );
};

export default DoorsCollection;
