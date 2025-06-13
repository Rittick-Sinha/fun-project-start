
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, CheckCircle, AlertCircle, Clock } from "lucide-react";

export function VisibilityMetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">Total Requests</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">1,245,789</div>
              <div className="text-xs text-gray-500 mt-1">Total requests processed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">Success Rate</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">99.2%</div>
              <div className="text-xs text-gray-500 mt-1">Successful requests</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">Error Rate</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">0.8%</div>
              <div className="text-xs text-gray-500 mt-1">Failed requests</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600">Avg. Latency</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900">145.3ms</div>
              <div className="text-xs text-gray-500 mt-1">Average response time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
