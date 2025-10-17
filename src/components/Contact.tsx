import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "NO.8, 9, & 10, POWA SHOPPING COMPLEX\nIYAGANKU, IBADAN, OYO",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 812 340 6331",
      link: "tel:+2348123406331",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@sanmilawfurniture.com.ng",
      link: "mailto:info@sanmilawfurniture.com.ng",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Visit our showroom or contact us to discuss your furniture needs. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-white/10 backdrop-blur-sm border-primary-foreground/20 hover-lift"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 whitespace-pre-line"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-primary-foreground/80 whitespace-pre-line">
                  {info.details}
                </p>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center fade-in">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Schedule a Visit
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-4 mt-24 pt-12 border-t border-primary-foreground/20">
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
    </section>
  );
};

export default Contact;
