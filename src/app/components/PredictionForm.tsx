import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Loader2, TrendingUp, Clock } from "lucide-react";

interface PredictionResult {
  outcome: "PASS" | "FAIL";
  confidence: number;
  riskLevel: "Low" | "Medium" | "High";
}

export function PredictionForm() {
  const [attendance, setAttendance] = useState("");
  const [studyHours, setStudyHours] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [errors, setErrors] = useState({ attendance: "", studyHours: "" });

  const validateForm = () => {
    const newErrors = { attendance: "", studyHours: "" };
    let isValid = true;

    const attendanceNum = parseFloat(attendance);
    const studyHoursNum = parseFloat(studyHours);

    if (!attendance || isNaN(attendanceNum)) {
      newErrors.attendance = "Please enter a valid attendance percentage";
      isValid = false;
    } else if (attendanceNum < 0 || attendanceNum > 100) {
      newErrors.attendance = "Attendance must be between 0 and 100";
      isValid = false;
    }

    if (!studyHours || isNaN(studyHoursNum)) {
      newErrors.studyHours = "Please enter valid study hours";
      isValid = false;
    } else if (studyHoursNum < 0 || studyHoursNum > 24) {
      newErrors.studyHours = "Study hours must be between 0 and 24";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePredict = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setResult(null);

    // Simulate API call with mock prediction logic
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const attendanceNum = parseFloat(attendance);
    const studyHoursNum = parseFloat(studyHours);

    // Simple prediction logic for demonstration
    const score = (attendanceNum * 0.4 + studyHoursNum * 10 * 0.6);
    const willPass = score > 50;
    const confidence = Math.min(95, Math.max(60, score + Math.random() * 10));

    let riskLevel: "Low" | "Medium" | "High" = "Low";
    if (!willPass) {
      riskLevel = "High";
    } else if (score < 65) {
      riskLevel = "Medium";
    }

    setResult({
      outcome: willPass ? "PASS" : "FAIL",
      confidence: Math.round(confidence),
      riskLevel,
    });

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl text-center">Performance Prediction</CardTitle>
        <CardDescription className="text-center">
          Enter student data to predict academic performance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="attendance" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Attendance (%)
            </Label>
            <Input
              id="attendance"
              type="number"
              placeholder="Enter attendance percentage (0-100)"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              min="0"
              max="100"
              step="0.1"
              className={errors.attendance ? "border-red-500" : ""}
            />
            {errors.attendance && (
              <p className="text-sm text-red-500">{errors.attendance}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="studyHours" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Study Hours per Day
            </Label>
            <Input
              id="studyHours"
              type="number"
              placeholder="Enter daily study hours (0-24)"
              value={studyHours}
              onChange={(e) => setStudyHours(e.target.value)}
              min="0"
              max="24"
              step="0.5"
              className={errors.studyHours ? "border-red-500" : ""}
            />
            {errors.studyHours && (
              <p className="text-sm text-red-500">{errors.studyHours}</p>
            )}
          </div>
        </div>

        <Button
          onClick={handlePredict}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-6 text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Predict Performance"
          )}
        </Button>

        {result && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg space-y-4 animate-in fade-in duration-500">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Prediction Result</p>
              <div
                className={`text-4xl font-bold ${
                  result.outcome === "PASS" ? "text-green-600" : "text-red-600"
                }`}
              >
                {result.outcome}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Confidence: {result.confidence}%
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-600">Risk Level:</span>
              <Badge
                variant={
                  result.riskLevel === "Low"
                    ? "default"
                    : result.riskLevel === "Medium"
                    ? "secondary"
                    : "destructive"
                }
                className={
                  result.riskLevel === "Low"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : result.riskLevel === "Medium"
                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    : "bg-red-100 text-red-800 hover:bg-red-100"
                }
              >
                {result.riskLevel} Risk
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
