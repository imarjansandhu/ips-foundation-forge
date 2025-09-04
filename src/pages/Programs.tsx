import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Baby, 
  Blocks, 
  BookOpen, 
  Calculator, 
  Palette, 
  Music,
  Trophy,
  Users
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      level: "Nursery",
      ageGroup: "3-4 years",
      icon: Baby,
      description: "Introduction to school environment through play-based learning",
      features: [
        "Play-way method of learning",
        "Basic social skills development",
        "Creative activities and storytelling",
        "Introduction to colors, shapes, and numbers",
        "Outdoor play and motor skills"
      ],
      color: "from-pink-400 to-rose-500"
    },
    {
      level: "LKG (Lower Kindergarten)",
      ageGroup: "4-5 years",
      icon: Blocks,
      description: "Building foundational skills through structured play and learning",
      features: [
        "Pre-reading and pre-writing skills",
        "Basic phonics and alphabet recognition",
        "Number concepts 1-20",
        "Art and craft activities",
        "Group activities and sharing"
      ],
      color: "from-blue-400 to-cyan-500"
    },
    {
      level: "UKG (Upper Kindergarten)",
      ageGroup: "5-6 years",
      icon: BookOpen,
      description: "Preparation for formal education with enhanced learning activities",
      features: [
        "Reading simple words and sentences",
        "Writing practice and formation",
        "Basic mathematics concepts",
        "Environmental awareness",
        "Moral and value education"
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      level: "Grade 1",
      ageGroup: "6-7 years",
      icon: Calculator,
      description: "Formal introduction to structured academic learning",
      features: [
        "PSEB curriculum introduction",
        "English, Mathematics, and EVS",
        "Hindi language basics",
        "Science exploration activities",
        "Physical education and games"
      ],
      color: "from-purple-400 to-violet-500"
    },
    {
      level: "Grade 2",
      ageGroup: "7-8 years",
      icon: Palette,
      description: "Expanding knowledge base with creative and analytical thinking",
      features: [
        "Advanced reading and comprehension",
        "Mathematical problem-solving",
        "Science experiments and observations",
        "Creative writing and expression",
        "Cultural and moral values"
      ],
      color: "from-orange-400 to-amber-500"
    },
    {
      level: "Grade 3",
      ageGroup: "8-9 years",
      icon: Music,
      description: "Developing critical thinking and independent learning skills",
      features: [
        "Complex mathematical concepts",
        "Advanced language skills",
        "Scientific reasoning and inquiry",
        "Project-based learning",
        "Leadership skill development"
      ],
      color: "from-teal-400 to-cyan-600"
    },
    {
      level: "Grade 4",
      ageGroup: "9-10 years",
      icon: Trophy,
      description: "Strengthening academic foundation with analytical skills",
      features: [
        "Research and presentation skills",
        "Advanced problem-solving techniques",
        "Independent study habits",
        "Community awareness projects",
        "Competitive academic activities"
      ],
      color: "from-indigo-400 to-blue-600"
    },
    {
      level: "Grade 5",
      ageGroup: "10-11 years",
      icon: Users,
      description: "Preparing for middle school with comprehensive skill development",
      features: [
        "Board exam preparation foundation",
        "Advanced academic concepts",
        "Critical thinking and analysis",
        "Leadership and responsibility",
        "Future academic planning"
      ],
      color: "from-red-400 to-pink-600"
    }
  ];

  const specialPrograms = [
    {
      title: "Extra-Curricular Activities",
      description: "Sports, arts, music, and cultural programs to develop well-rounded personalities",
      icon: Trophy
    },
    {
      title: "Moral Education",
      description: "Character building through stories, values, and ethical discussions",
      icon: BookOpen
    },
    {
      title: "Physical Education",
      description: "Structured physical activities and games for health and fitness",
      icon: Users
    }
  ];

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Academic Programs
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Nurturing Growth at Every Stage
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From Nursery to Grade 5, our comprehensive PSEB-affiliated curriculum 
              is designed to build strong foundations while fostering creativity, 
              critical thinking, and character development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each program is carefully crafted to meet the developmental needs of children 
              at every stage, ensuring smooth progression and comprehensive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-bounce`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {program.ageGroup}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold gradient-text">
                    {program.level}
                  </CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-foreground">Key Learning Areas:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Beyond Academics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in holistic development through various programs that 
              complement our academic curriculum and nurture well-rounded individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="text-center p-8 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-warm to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold gradient-text mb-4">
                  Our Learning Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Early Years (Nursery - UKG)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Play-based learning methodology where children explore, discover, and learn through 
                      hands-on activities, games, and creative play. We focus on developing social skills, 
                      emotional intelligence, and basic academic readiness in a nurturing environment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Primary Years (Grade 1-5)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Structured academic learning aligned with PSEB curriculum, incorporating interactive 
                      teaching methods, project-based learning, and continuous assessment. We emphasize 
                      critical thinking, problem-solving, and independent learning skills.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-3 text-center">Key Focus Areas Across All Levels</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">Academic Excellence</span>
                    </div>
                    <div>
                      <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <span className="text-sm font-medium">Social Skills</span>
                    </div>
                    <div>
                      <Palette className="w-8 h-8 text-accent-warm mx-auto mb-2" />
                      <span className="text-sm font-medium">Creativity</span>
                    </div>
                    <div>
                      <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                      <span className="text-sm font-medium">Character Building</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Give your child the best start in their educational journey. 
              Contact us today to learn more about our admission process and 
              schedule a visit to see our programs in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="shadow-strong text-lg px-8 py-6"
              >
                <Link to="/contact">Start Admission Process</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary shadow-medium text-lg px-8 py-6"
              >
                <Link to="/why-choose-us">Why Choose IPS?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;