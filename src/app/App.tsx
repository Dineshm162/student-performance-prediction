import { Header } from "./components/Header";
import { PredictionForm } from "./components/PredictionForm";
import { DashboardPreview } from "./components/DashboardPreview";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <PredictionForm />
          <DashboardPreview />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}