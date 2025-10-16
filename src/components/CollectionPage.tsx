import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  image: string;
  title: string;
  description: string;
  price?: string;
}

interface CollectionPageProps {
  title: string;
  description: string;
  products: Product[];
}

const CollectionPage = ({ title, description, products }: CollectionPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:bg-accent/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-24">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-soft hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
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
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                {product.price && (
                  <p className="text-lg font-semibold text-accent">
                    {product.price}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
