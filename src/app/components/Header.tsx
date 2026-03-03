import { GraduationCap } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Academic Performance Prediction
            </h1>
            <p className="text-gray-600 mt-2">
              Predict student performance using data-driven insights
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
