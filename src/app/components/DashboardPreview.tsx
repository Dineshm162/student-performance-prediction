import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

const mockData = [
  { month: "Jan", pass: 85, fail: 15 },
  { month: "Feb", pass: 78, fail: 22 },
  { month: "Mar", pass: 90, fail: 10 },
  { month: "Apr", pass: 82, fail: 18 },
  { month: "May", pass: 88, fail: 12 },
  { month: "Jun", pass: 92, fail: 8 },
];

export function DashboardPreview() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Student Performance Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pass" fill="#22c55e" name="Pass %" radius={[8, 8, 0, 0]} />
            <Bar dataKey="fail" fill="#ef4444" name="Fail %" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
