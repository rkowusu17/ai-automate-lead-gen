import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import DisplayCards from "@/components/ui/display-cards";
import { Zap, Shield, Clock, Mail, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    prompt: "",
  });

  const advantageCards = [
    {
      icon: <Zap className="size-4 text-primary" />,
      title: "Fast Solutions",
      description: "AI roadmap in 3-5 minutes",
      date: "Instant delivery",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-primary" />,
      title: "Expert Guidance",
      description: "Tailored AI implementation",
      date: "Professional advice",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Clock className="size-4 text-primary" />,
      title: "Save Time",
      description: "Automated AI strategies",
      date: "Efficient process",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.prompt.trim()
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    //rkowusu17.app.n8n.cloud/webhook-test/643d1103-7e1a-45b0-ae36-22dfa290298b
    https: try {
      const response = await fetch(
        "https://rkowusu17.app.n8n.cloud/webhook/643d1103-7e1a-45b0-ae36-22dfa290298b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            prompt: formData.prompt,
          }),
        }
      );

      if (response.ok) {
        navigate("/confirmation");
        console.log("Form submitted successfully");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Geometric Animation */}
      <div className="relative">
        <HeroGeometric
          badge="AI-IT Solutions"
          title1="AI-Automate-IT"
          title2="Get your free AI implementation roadmap"
        />
      </div>

      {/* Advantages Section with Animated Cards */}
      <section className="py-12 md:py-20 px-4 bg-blue-100/45">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground">
            Why Choose AI-Automate-IT?
          </h2>
          <div className="flex justify-center items-center min-h-[350px] md:min-h-[400px] overflow-hidden">
            <DisplayCards cards={advantageCards} />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto w-full">
          <div className="bg-card rounded-2xl w-full shadow-lg border border-border p-3 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
              Get Your Free AI Roadmap
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full md:[w-3/4] lg:w-1/2 mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-foreground font-medium"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="rounded-xl border-none border-input focus:border-primary focus:ring-primary outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-foreground font-medium"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="rounded-xl border-none outline-none border-input focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-xl border-none outline-none border-input focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-foreground font-medium">
                  Business Idea / Problem
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe your business idea or problem you'd like to solve with AI..."
                  value={formData.prompt}
                  onChange={(e) =>
                    setFormData({ ...formData, prompt: e.target.value })
                  }
                  className="rounded-xl  outline-none border-input focus:border-none focus:border-primary focus:ring-primary min-h-[120px] md:min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl text-sm py-5 px-3 md:py-6 md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Get AI implementation guide"}
              </Button>

              <div className="flex items-center whitespace-nowrap justify-center gap-2 text-sm text-muted-foreground pt-4">
                <Shield className="w-4 h-4" />
                <p className="text-center">
                  Your information is kept a secret with us
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI-Automate IT
              </h3>
              <p className="text-muted-foreground text-sm">
                Expert AI consulting and implementation services to transform
                your business.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/rkowusu17"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li> */}
                <li>
                  <a
                    onClick={() => navigate("/privacy")}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Connect With Us
              </h4>
              <div className="flex justify-center md:justify-end gap-4 mb-3">
                <a
                  href="mailto:owusureginald17@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reginald-owusu-b16ba5202/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Re_ggie12"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              {/* <p className="text-sm text-muted-foreground">
                <a href="mailto:owusureginald17@gmail.com"></a>
              </p> */}
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 AI-Automate IT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
