
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const servicesData = [
  {
    service: "frontend",
    path: "/api/v1/frontend",
    requests: "450,000",
    errors: 225,
    latency: "120ms"
  },
  {
    service: "auth",
    path: "/api/v1/auth",
    requests: "350,000",
    errors: 175,
    latency: "150ms"
  },
  {
    service: "products",
    path: "/api/v1/products",
    requests: "250,000",
    errors: 125,
    latency: "130ms"
  },
  {
    service: "cart",
    path: "/api/v1/cart",
    requests: "150,000",
    errors: 75,
    latency: "140ms"
  },
  {
    service: "checkout",
    path: "/api/v1/checkout",
    requests: "50,000",
    errors: 25,
    latency: "160ms"
  },
];

export function TopServicesTable() {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Top Services</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Path</TableHead>
              <TableHead>Requests</TableHead>
              <TableHead>Errors</TableHead>
              <TableHead>Latency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servicesData.map((service) => (
              <TableRow key={service.service}>
                <TableCell className="font-medium">{service.service}</TableCell>
                <TableCell className="text-gray-600">{service.path}</TableCell>
                <TableCell>{service.requests}</TableCell>
                <TableCell className="text-red-600">{service.errors}</TableCell>
                <TableCell>{service.latency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
