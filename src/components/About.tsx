import { Target, Lightbulb, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Innovative designs that blend modern aesthetics with African heritage",
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Superior quality through skilled artisanship and attention to detail",
    },
    {
      icon: Shield,
      title: "Durability",
      description: "Built to last with premium materials and robust construction",
    },
    {
      icon: Target,
      title: "Satisfaction",
      description: "Dedicated to exceeding expectations and building lasting relationships",
    },
  ];

  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container px-4">
        {/* Vision */}
        <div className="max-w-4xl mx-auto text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-teal font-medium leading-relaxed">
            "To be the most preferred furniture company in the African continents"
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-5xl mx-auto mb-24 fade-in">
          <Card className="p-8 md:p-12 shadow-elegant border-none bg-card">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              "To be acquainted with creativity that subjected to local craftsmanship and technological 
              advancement that requires to meet the appropriate standard in delivering furniture for 
              homes/offices, all and sundry through management efficiency and adaptation to standards, 
              quality materials, finest products and after-sales service reliability, for the satisfaction 
              and happiness of our employers, customers and stakeholders"
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Our mode of operation, project frameworks, beliefs, principles ensued in our mode 
            of operation as much rather as fear (f) if ever there is/are (e) as (a) risk (r) timbers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover-lift shadow-soft border-none bg-card group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-primary">
              That's why all and sundry turn to be our product's lovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
