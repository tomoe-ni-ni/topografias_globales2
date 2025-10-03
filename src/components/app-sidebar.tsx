"use client";

import {
  Building2,
  ChartNoAxesCombined,
  FileChartColumn,
  FolderGit,
  Frame,
  Grid2x2Check,
  Map,
  PieChart,
  UsersRound,
  WalletCards,
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
      name: "Topografías Globales",
      logo: Building2,
      plan: "Empresa",
    },
  ],
  navMain: [
    {
      title: "Reportes",
      url: "/dashboard/reportes",
      icon: ChartNoAxesCombined,
      items: [],
    },
    {
      title: "Documentos",
      url: "/dashboard/documentos",
      icon: WalletCards,
      items: [],
    },
    {
      title: "Proyectos",
      url: "/dashboard/proyectos",
      icon: FolderGit,
      items: [],
    },
    {
      title: "Estados de documentos",
      url: "/dashboard/estado_documento",
      icon: FileChartColumn,
      items: [],
    },
    {
      title: "Area",
      url: "/dashboard/area",
      icon: Grid2x2Check,
      items: [],
    },
    {
      title: "Clientes",
      url: "/dashboard/clientes",
      icon: UsersRound,
      items: [],
    },
    {
      title: "Usuarios",
      url: "/dashboard/usuarios",
      icon: WalletCards,
      items: [],
    },
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
            <span className="truncate font-medium">
              {"Topografías Globales"}
            </span>
            <span className="truncate text-xs">{"Empresa"}</span>
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
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
