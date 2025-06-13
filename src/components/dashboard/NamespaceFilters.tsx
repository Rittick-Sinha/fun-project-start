
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
            <SelectItem value="frontend">frontend</SelectItem>
            <SelectItem value="backend">backend</SelectItem>
            <SelectItem value="database">database</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Workloads</SelectItem>
            <SelectItem value="deployment">Deployments</SelectItem>
            <SelectItem value="statefulset">StatefulSets</SelectItem>
            <SelectItem value="daemonset">DaemonSets</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}
