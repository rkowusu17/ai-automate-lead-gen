import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const Privacy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At <strong>AI-Automate IT</strong>, we value your privacy and are
          committed to protecting your personal information. This policy
          outlines how we collect, use, and safeguard the data you share with us
          when interacting with our web application that provides AI-driven
          business problem suggestions and implementation roadmaps.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          When you use our platform, we may collect basic information such as
          your name and business details. This allows us to generate customized
          AI solutions and recommendations for your business needs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          The data you provide is used strictly for generating tailored AI
          implementation road-maps and problem-solving insights. We do not sell,
          trade, or share your information with any third parties without your
          consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          3. Data Security
        </h2>
        <p className="mb-4">
          We implement strong technical and administrative measures to protect
          your information against unauthorized access, loss, or misuse. All
          data transmission between your browser and our servers is encrypted
          using industry-standard protocols.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          4. Use of AI Systems
        </h2>
        <p className="mb-4">
          Our AI systems analyze your inputs to create insights, predictions,
          and business recommendations. The models are designed to maintain user
          confidentiality, and no identifiable information is used to train or
          retrain AI models.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          5. Data Retention
        </h2>
        <p className="mb-4">
          We retain your data only as long as necessary to fulfill the purpose
          it was collected for. Once it is no longer needed, it will be securely
          deleted or anonymized.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          6. Your Rights
        </h2>
        <p className="mb-4">
          You have the right to access, update, or request deletion of your
          personal information at any time. Please contact us through the
          platform if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          7. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our services or legal requirements. Updates will be posted on this
          page with a revised effective date.
        </p>

        <p className="mt-8 text-gray-700">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12 text-sm text-gray-500 text-center">
        <Button
          onClick={() => navigate("/")}
          className="mb-5 rounded-xl px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold bg-blue-600/60 hover:bg-blue-700/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <HomeIcon> </HomeIcon> Back to Home
        </Button>
        <p className="text-sm text-muted-foreground">
          © 2025 AI-Automate IT. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
