"use client";

import {
  ALargeSmall,
  BookOpen,
  Bot,
  Building2,
  Frame,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

const data = {
  teams: [
    {
      name: "Control",
      logo: Building2,
      plan: "Empresa",
    },
  ],
  navMain: [
    {
      title: "Mi horario",
      url: "/dashboard/horario",
      icon: LayoutDashboard,
      items: [],
    },
    {
      title: "Deberes",
      url: "/dashboard/deberes",
      icon: ALargeSmall,
      items: [],
    },
    {
      title: "Horario de profesores",
      url: "/dashboard/horario-profesores",
      icon: SquareTerminal,
      items: [],
    },
    {
      title: "Calendarización 2025",
      url: "/dashboard/calendarizacion-2025",
      icon: Frame,
      items: [],
    },
    {
      title: "Libros (PDF)",
      url: "/dashboard/libros",
      icon: BookOpen,
      items: [],
    },
    // {
    //   title: "Tipos de Permiso",
    //   url: "#",
    //   icon: Settings2,
    //   items: [],
    // },
    // {
    //   title: "Tareas",
    //   url: "/dashboard/tareas",
    //   icon: Bot,
    //   items: [],
    // },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, status } = useSession();

  const rolUser = session?.user?.rol;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Building2 className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{"Edelmira del Pando"}</span>
            <span className="truncate text-xs">{"Colegio"}</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {status !== "loading" ? (
          <NavMain items={data.navMain} />
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <span className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 h-8 w-8"></span>
            <span className="ml-2 text-gray-500">Cargando menú...</span>
          </div>
        )}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
