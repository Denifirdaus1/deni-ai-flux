import { useState } from "react";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
}

interface ServicesListProps {
  services: Service[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <Card key={index} className="bento-card cursor-pointer transition-all duration-200 hover:shadow-lg">
          <CardHeader 
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            onClick={() => toggleService(index)}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-heading">{service.title}</CardTitle>
            </div>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedService === index ? 'rotate-180' : ''
              }`} 
            />
          </CardHeader>
          
          {expandedService === index && (
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="hover:text-accent">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ServicesList;