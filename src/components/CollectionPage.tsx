import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram, Facebook } from "lucide-react";
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
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

      {/* Footer */}
      <footer className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              SANMI LAW FURNITURE
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Quality Furniture | African Craftsmanship | Lasting Excellence
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="https://www.instagram.com/sanmilawfurniture_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Visit our Instagram"
              >
                <Instagram className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com/Sanmilaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Visit our Facebook"
              >
                <Facebook className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-300" />
              </a>
            </div>

            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} SANMI LAW FURNITURE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollectionPage;
