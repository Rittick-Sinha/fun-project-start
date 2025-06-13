
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Clock } from "lucide-react";

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Services</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">4/5</div>
            </div>
            <div className="text-gray-400">
              <TrendingDown className="w-5 h-5" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Error Rate</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">1.20%</div>
            </div>
            <div className="text-red-400">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Latency (p95)</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">180.50ms</div>
            </div>
            <div className="text-yellow-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
