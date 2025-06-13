
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "200 (92.3%)", value: 92.3, count: "200", color: "#10B981" },
  { name: "500 (0.5%)", value: 0.5, count: "500", color: "#EF4444" },
  { name: "401 (1.2%)", value: 1.2, count: "401", color: "#F59E0B" },
  { name: "400 (2.0%)", value: 2.0, count: "400", color: "#F97316" },
  { name: "201 (4.0%)", value: 4.0, count: "201", color: "#06B6D4" },
];

const COLORS = ["#10B981", "#EF4444", "#F59E0B", "#F97316", "#06B6D4"];

export function ResponseDistributionChart() {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Response Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                height={36}
                iconType="rect"
                wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
