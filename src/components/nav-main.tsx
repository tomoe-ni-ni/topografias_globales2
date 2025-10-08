"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <SidebarGroup className="mt-4">
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link key={item.title} href={item.url}>
              <div key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={
                      isActive
                        ? theme == "dark"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                        : ""
                    }
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            </Link>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
