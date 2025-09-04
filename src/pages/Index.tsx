import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Shield, 
  Heart, 
  Users, 
  Award, 
  BookOpen, 
  MapPin, 
  Phone 
} from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const Index = () => {
  const features = [
    {
      icon: Award,
      title: "PSEB Affiliated",
      description: "Recognized curriculum ensuring quality education standards"
    },
    {
      icon: GraduationCap,
      title: "Nursery to Grade 5",
      description: "Complete primary education foundation"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure and nurturing atmosphere for learning"
    },
    {
      icon: Heart,
      title: "Passionate Teachers",
      description: "Dedicated educators committed to student growth"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-primary-light overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-white text-primary shadow-soft border-0">
              Welcome to Indian Public School
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
              Building Foundations for a 
              <span className="block text-accent">
                Bright Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover the nurturing haven of Indian Public School, nestled in Gajju Khera, Punjab. 
              We are a PSEB-affiliated launchpad for bright futures, dedicated to shaping young minds from Nursery to 5th grade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="shadow-medium text-lg px-8 py-6 hover:bg-primary-hover"
              >
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white shadow-soft text-lg px-8 py-6"
              >
                <Link to="/programs">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth border-0">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              More Than Just a School
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are more than just a studying centre; we are a community dedicated to holistic development. 
              Our mission is to provide a secure and stimulating atmosphere where every child can thrive, 
              grow, and discover their unique potential in a nurturing environment that feels like home.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-0 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    PSEB-aligned curriculum with innovative teaching methods
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-0 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-success">Holistic Growth</h3>
                  <p className="text-muted-foreground">
                    Physical, emotional, and social development alongside academics
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth border-0 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">Caring Community</h3>
                  <p className="text-muted-foreground">
                    A warm, supportive environment where every child feels valued
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of learning and discover how we can help your child 
            build the foundations for a bright and successful future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white shadow-medium text-lg px-8 py-6 border-0"
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary shadow-soft text-lg px-8 py-6"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          {/* Quick Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Khera Gajju, Punjab 140602</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919417148163" className="hover:text-white transition-smooth">
                  +91 94171 48163
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;