import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-card rounded-2xl shadow-lg border border-border p-6 md:p-12 text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-primary" />
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 px-4">
          Your information has been received.
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground mb-8 px-4">
          Expect a solution email in 3–5 minutes.
        </p>
        
        <Button
          onClick={() => navigate("/")}
          className="rounded-xl px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
