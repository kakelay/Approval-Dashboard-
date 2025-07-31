"use client"

import { Calendar, CheckCircle, Clock, FileText, Home, Settings, Users, XCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { LanguageAwareText } from "./language-aware-text"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface AppSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { t } = useLanguage()

  const navigationItems = [
    {
      title: t("dashboard"),
      key: "dashboard",
      icon: Home,
    },
    {
      title: t("pendingApprovals"),
      key: "pending",
      icon: Clock,
    },
    {
      title: t("approvedItems"),
      key: "approved",
      icon: CheckCircle,
    },
    {
      title: t("rejectedItems"),
      key: "rejected",
      icon: XCircle,
    },
    {
      title: t("allRequests"),
      key: "all-requests",
      icon: FileText,
    },
    {
      title: t("users"),
      key: "users",
      icon: Users,
    },
    {
      title: t("reports"),
      key: "reports",
      icon: Calendar,
    },
    {
      title: t("settings"),
      key: "settings",
      icon: Settings,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CheckCircle className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <LanguageAwareText as="span" className="text-sm font-semibold">
              {t("adminPortal")}
            </LanguageAwareText>
            <LanguageAwareText as="span" className="text-xs text-muted-foreground">
              {t("approvalSystem")}
            </LanguageAwareText>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton isActive={activeSection === item.key} onClick={() => onSectionChange(item.key)}>
                    <item.icon />
                    <LanguageAwareText>{item.title}</LanguageAwareText>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">Administrator</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
