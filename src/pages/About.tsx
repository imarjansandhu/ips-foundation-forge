import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  BookOpen, 
  Award,
  Sparkles,
  Globe
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Every child receives individual attention in a loving, supportive environment"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Strong foundation in core subjects with innovative teaching methodologies"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building lasting relationships between students, families, and educators"
    },
    {
      icon: Sparkles,
      title: "Character Building",
      description: "Instilling moral values, integrity, and respect for diversity"
    }
  ];

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              About Indian Public School
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Our Story of Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the principles of holistic education and community growth, 
              Indian Public School has been nurturing young minds in Gajju Khera, Punjab, 
              creating tomorrow's leaders one student at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-medium">
              <CardHeader>
                <CardTitle className="text-3xl font-bold gradient-text text-center mb-6">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We are more than just a studying centre; we are a community dedicated to holistic development. 
                  Located in the heart of Gajju Khera, Punjab, Indian Public School stands as a beacon of 
                  quality education, where learning meets love, and potential meets purpose.
                </p>
                <p>
                  Our journey began with a simple yet powerful belief: every child deserves an education 
                  that not only fills their mind with knowledge but also nurtures their heart with values. 
                  As a PSEB-affiliated institution, we combine standardized academic excellence with 
                  personalized care, ensuring each student receives the attention they deserve.
                </p>
                <p>
                  From our dedicated faculty to our modern facilities, every aspect of our school is 
                  designed to provide a secure and stimulating atmosphere where children can thrive, 
                  explore their creativity, and build the strong foundations needed for their bright futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="p-8 shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-4 shadow-medium">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold gradient-text">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading primary school in the region, recognized for nurturing 
                  academically proficient, morally strong, and well-rounded individuals who 
                  contribute positively to society and lead with integrity and compassion.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="p-8 shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mb-4 shadow-medium">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold gradient-text">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide a balanced education that fosters intellectual curiosity, 
                  champions academic achievement, cultivates strong moral principles, 
                  and unlocks the unique potential within every student through innovative 
                  teaching and compassionate care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do at Indian Public School, 
              shaping our approach to education and community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-warm to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-medium">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-strong">
              <Globe className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              At Indian Public School, we are committed to creating an environment where 
              every child feels valued, supported, and empowered to reach their full potential. 
              Our PSEB-affiliated curriculum ensures academic standards while our caring 
              approach ensures emotional and social growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="opacity-90">PSEB-affiliated curriculum with modern teaching methods</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p className="opacity-90">Passionate teachers dedicated to student success</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Caring Environment</h3>
                <p className="opacity-90">Safe, nurturing space for learning and growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;