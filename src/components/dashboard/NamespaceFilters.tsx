
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export function NamespaceFilters() {
  return (
    <Card className="p-4 mb-6 bg-white border border-gray-200">
      <div className="flex flex-wrap gap-4 items-center">
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Namespaces</SelectItem>
            <SelectItem value="default">default</SelectItem>
            <SelectItem value="istio-system">istio-system</SelectItem>
            <SelectItem value="monitoring">monitoring</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="frontend">productpage</SelectItem>
            <SelectItem value="backend">reviews</SelectItem>
            <SelectItem value="database">ratings</SelectItem>
            <SelectItem value="database">details</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Workloads</SelectItem>
            <SelectItem value="deployment">productpage v1</SelectItem>
            <SelectItem value="statefulset">reviews v1</SelectItem>
            <SelectItem value="daemonset">reviews v2</SelectItem>
            <SelectItem value="daemonset">reviews v3</SelectItem>
            <SelectItem value="daemonset">ratings v1</SelectItem>
            <SelectItem value="daemonset">details v1</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}
