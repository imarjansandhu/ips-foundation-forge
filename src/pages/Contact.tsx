import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Calendar,
  Users
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Thank you! Your inquiry has been sent. We'll contact you soon.");
    setFormData({
      parentName: "",
      phone: "",
      email: "",
      grade: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-white text-primary border-0">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Get in Touch Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your child's educational journey? We're here to answer 
              your questions and help you take the next step toward a bright future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Visit Our Campus
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We welcome you to visit our school and see firsthand the nurturing 
                  environment where your child will grow and learn.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="p-6 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">School Address</h3>
                        <p className="text-muted-foreground">
                          Near Peer Bhem Shah Ji<br />
                          Khera Gajju, Punjab 140602
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone Numbers</h3>
                        <div className="space-y-1">
                          <a 
                            href="tel:+919417148163" 
                            className="block text-muted-foreground hover:text-primary transition-smooth"
                          >
                            +91 94171 48163
                          </a>
                          <a 
                            href="tel:+917340739163" 
                            className="block text-muted-foreground hover:text-primary transition-smooth"
                          >
                            +91 73407 39163
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email Address</h3>
                        <a 
                          href="mailto:sandhu.jag11@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          sandhu.jag11@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">School Hours</h3>
                        <div className="text-muted-foreground">
                          <p>Monday to Saturday: 7:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    Send Inquiry
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent's Name *</Label>
                      <Input
                        id="parentName"
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange("parentName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="transition-smooth"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="transition-smooth"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="transition-smooth"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="grade">Child's Prospective Grade *</Label>
                      <Select value={formData.grade} onValueChange={(value) => handleInputChange("grade", value)}>
                        <SelectTrigger className="transition-smooth">
                          <SelectValue placeholder="Select grade level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nursery">Nursery (3-4 years)</SelectItem>
                          <SelectItem value="lkg">LKG (4-5 years)</SelectItem>
                          <SelectItem value="ukg">UKG (5-6 years)</SelectItem>
                          <SelectItem value="grade1">Grade 1 (6-7 years)</SelectItem>
                          <SelectItem value="grade2">Grade 2 (7-8 years)</SelectItem>
                          <SelectItem value="grade3">Grade 3 (8-9 years)</SelectItem>
                          <SelectItem value="grade4">Grade 4 (9-10 years)</SelectItem>
                          <SelectItem value="grade5">Grade 5 (10-11 years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your child's needs, interests, or any questions you have..."
                        rows={4}
                        className="transition-smooth resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full shadow-medium text-lg py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Find Us on the Map
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Gajju Khera, Punjab, easily accessible from surrounding areas.
              </p>
            </div>

            <Card className="overflow-hidden shadow-medium">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.9334006681538!2d76.63046865174607!3d30.582375766251303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe7689734a2b5%3A0xf9f14c37b0aced2e!2sIndian%20Public%20School!5e1!3m2!1sen!2sin!4v1756807049584!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">
              What Happens Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">We'll Contact You</h3>
                  <p className="text-muted-foreground">
                    Our admissions team will reach out within 24 hours to discuss your child's needs and answer your questions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Schedule a Visit</h3>
                  <p className="text-muted-foreground">
                    We'll arrange a convenient time for you and your child to visit our campus and meet our teachers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Begin the Journey</h3>
                  <p className="text-muted-foreground">
                    Complete the enrollment process and welcome your child to the IPS family where bright futures begin.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;