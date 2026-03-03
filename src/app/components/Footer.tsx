import { Github, Cloud } from "lucide-react";
import { Badge } from "./ui/badge";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">View on GitHub</span>
            </a>
            <Badge className="bg-blue-600 hover:bg-blue-600 flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              Deployed on Azure
            </Badge>
          </div>
          
          <p className="text-sm text-center text-gray-600 max-w-2xl">
            An ML-powered academic performance prediction system designed to help
            educators identify at-risk students early and provide targeted
            interventions. Built with machine learning algorithms and modern web
            technologies.
          </p>
          
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Academic Performance Prediction. Final Year Project.
          </div>
        </div>
      </div>
    </footer>
  );
}
