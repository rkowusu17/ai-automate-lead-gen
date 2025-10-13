import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12 text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="w-20 h-20 text-primary" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Your information has been received.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Expect a solution email in 3–5 minutes.
        </p>
        
        <Button
          onClick={() => navigate("/")}
          className="rounded-xl px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
