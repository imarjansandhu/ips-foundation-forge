import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Shield, 
  Heart, 
  BookOpen, 
  Palette, 
  Target,
  CheckCircle
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "PSEB Affiliated Curriculum",
      description: "Our education aligns with the Punjab School Education Board, ensuring a standardized and recognized path for your child's academic journey. This accreditation guarantees that your child receives quality education that meets state standards."
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "We focus on the all-round growth of a child—academic, physical, emotional, social, and creative—through a balanced mix of academics, sports, arts, and moral education that prepares them for life's challenges."
    },
    {
      icon: Shield,
      title: "Safe & Secure Campus",
      description: "Your child's safety is our paramount concern. Our campus is designed to be a secure haven for learning and play, with comprehensive safety measures, supervised activities, and a nurturing environment."
    },
    {
      icon: Heart,
      title: "Passionate & Caring Faculty",
      description: "Our teachers are not just educators; they are mentors who are passionate about nurturing young minds and giving individual attention to each student, ensuring no child is left behind."
    },
    {
      icon: Palette,
      title: "Child-Centric Learning Environment",
      description: "Our classrooms are vibrant, stimulating, and equipped with resources to make learning an engaging and enjoyable experience. We believe that happy children are successful learners."
    },
    {
      icon: Target,
      title: "Strong Moral Foundation",
      description: "We integrate values and ethics into our daily routine, helping shape character and build responsible future citizens who contribute positively to society."
    },
    {
      icon: BookOpen,
      title: "Focus on Foundational Skills",
      description: "We build a strong base in literacy, numeracy, and cognitive skills, ensuring students are well-prepared for higher education and equipped with essential life skills."
    }
  ];

  const achievements = [
    "100% PSEB Board affiliation",
    "Experienced teaching staff",
    "Modern learning facilities",
    "Comprehensive safety protocols",
    "Individual attention to each student",
    "Balanced academic and co-curricular activities"
  ];

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-white text-primary border-0">
              Why Indian Public School?
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Excellence in Every Aspect
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover what makes Indian Public School the preferred choice for families 
              in Gajju Khera and beyond. Our commitment to quality education and holistic 
              development sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines academic excellence with character development, 
              creating well-rounded individuals ready for future success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-bounce">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground">
                Recognition and milestones that reflect our commitment to excellence
              </p>
            </div>

            <Card className="p-8 shadow-soft">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The IPS Difference */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The IPS Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the unique advantages that make Indian Public School 
                the right choice for your child's educational journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Academic Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    PSEB-aligned curriculum delivered through innovative teaching methods that make learning enjoyable and effective.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-success rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-success">Nurturing Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Individual attention and emotional support that helps every child feel valued, confident, and ready to learn.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-accent">Community Spirit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strong partnerships between families, teachers, and students that create a supportive learning community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the IPS Advantage
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join hundreds of families who have chosen Indian Public School for their children's 
              foundational years. See firsthand how we nurture young minds and build bright futures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white shadow-medium text-lg px-8 py-6 border-0"
              >
                <Link to="/contact">Schedule a Campus Visit</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary shadow-soft text-lg px-8 py-6"
              >
                <Link to="/programs">View Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUs;