"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { StatsCards } from "@/components/stats-cards"
import { ApprovalTable } from "@/components/approval-table"
import { DashboardOverview } from "@/components/pages/dashboard-overview"
import { ApprovedItems } from "@/components/pages/approved-items"
import { RejectedItems } from "@/components/pages/rejected-items"
import { AllRequests } from "@/components/pages/all-requests"
import { UsersManagement } from "@/components/pages/users-management"
import { Reports } from "@/components/pages/reports"
import { Settings } from "@/components/pages/settings"
import { Separator } from "@/components/ui/separator"
import { LanguageProvider, useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function AdminDashboardContent() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("pending")

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />
      case "pending":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{t("adminPortal")}</h1>
              <p className="text-muted-foreground">{t("manageReview")}</p>
            </div>
            <StatsCards />
            <ApprovalTable />
          </div>
        )
      case "approved":
        return <ApprovedItems />
      case "rejected":
        return <RejectedItems />
      case "all-requests":
        return <AllRequests />
      case "users":
        return <UsersManagement />
      case "reports":
        return <Reports />
      case "settings":
        return <Settings />
      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{t("adminPortal")}</h1>
              <p className="text-muted-foreground">{t("manageReview")}</p>
            </div>
            <StatsCards />
            <ApprovalTable />
          </div>
        )
    }
  }

  const getSectionTitle = () => {
    switch (activeSection) {
      case "dashboard":
        return t("dashboard")
      case "pending":
        return t("pendingApprovals")
      case "approved":
        return t("approvedItems")
      case "rejected":
        return t("rejectedItems")
      case "all-requests":
        return t("allRequests")
      case "users":
        return t("users")
      case "reports":
        return t("reports")
      case "settings":
        return t("settings")
      default:
        return t("pendingApprovals")
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 px-4 flex-1">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb className="flex-1">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{t("adminPortal")}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getSectionTitle()}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {/* Theme and Language Controls */}
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default function AdminDashboard() {
  return (
    <LanguageProvider>
      <AdminDashboardContent />
    </LanguageProvider>
  )
}
