import { Card } from "@/components/ui/card";
import productDining from "@/assets/product-dining.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productOffice from "@/assets/product-office.jpg";
import productBedroom from "@/assets/product-bedroom.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";
import productDoors from "@/assets/product-doors.jpg";

const Products = () => {
  const products = [
    {
      image: productDining,
      title: "Dining Collections",
      description: "Elegant dining sets for memorable gatherings",
    },
    {
      image: productSofa,
      title: "Living Room",
      description: "Luxurious sofas and seating solutions",
    },
    {
      image: productOffice,
      title: "Office Furniture",
      description: "Professional workspace essentials",
    },
    {
      image: productBedroom,
      title: "Bedroom Sets",
      description: "Comfortable and stylish bedroom furniture",
    },
    {
      image: productKitchen,
      title: "Kitchen Cabinets",
      description: "Custom kitchen solutions and cabinetry",
    },
    {
      image: productDoors,
      title: "Doors",
      description: "Premium quality doors for every space",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of meticulously crafted furniture pieces, 
            each designed to bring elegance and comfort to your space
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-soft hover-lift cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
