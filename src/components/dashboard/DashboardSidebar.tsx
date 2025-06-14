
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard,
  Activity,
  GitFork,
  Database,
  GitBranch,
  BarChart3, 
  Eye, 
  BarChart, 
  Shield, 
  Users, 
  Settings, 
  HelpCircle,
  Server
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Observability",
    icon: Activity,
    hasSubmenu: true,
  },
  {
    title: "Traffic Management",
    icon: GitFork,
    hasSubmenu: true,
  },
  {
    title: "Visibility",
    icon: Eye,
    hasSubmenu: true,
    submenuItems: [
      { title: "Traffic Overview", href: "/visibility" },
      { title: "Errors", href: "/errors" },
    ]
  },
  {
    title: "Security",
    icon: Shield,
  },
  {
    title: "Clusters",
    icon: Database,
  },
  {
    title: "Git Integration",
    icon: GitBranch,
  },
  {
    title: "User Management",
    icon: Users,
  },
  {
    title: "Settings",
    icon: Settings,
  },
  {
    title: "Help",
    icon: HelpCircle,
  },
];

export function DashboardSidebar() {
  const location = useLocation();

  const isActive = (href?: string, submenuItems?: any[]) => {
    if (href) {
      return location.pathname === href;
    }
    if (submenuItems) {
      return submenuItems.some(item => location.pathname === item.href);
    }
    return false;
  };

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Istio Manager</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.hasSubmenu ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className={`w-full justify-between ${isActive(item.href, item.submenuItems) ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className="w-4 h-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6 mt-1">
                        {item.submenuItems?.map((subItem) => (
                          <Link key={subItem.title} to={subItem.href}>
                            <div className={`text-sm py-1 px-2 rounded hover:bg-gray-100 ${location.pathname === subItem.href ? 'bg-blue-50 text-blue-700' : 'text-gray-600'}`}>
                              {subItem.title}
                            </div>
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton className={`${isActive(item.href) ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} asChild>
                      <Link to={item.href || "#"}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          © 2024 Istio Manager<br />
          Version 1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
