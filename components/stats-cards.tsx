"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, XCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function StatsCards() {
  const { t } = useLanguage()

  const stats = [
    {
      title: t("pendingApprovals"),
      value: "24",
      icon: Clock,
      description: t("awaitingReview"),
      color: "text-yellow-600",
    },
    {
      title: t("approvedToday"),
      value: "18",
      icon: CheckCircle,
      description: t("processedSuccessfully"),
      color: "text-green-600",
    },
    {
      title: t("totalRequests"),
      value: "156",
      icon: FileText,
      description: t("thisMonth"),
      color: "text-blue-600",
    },
    {
      title: t("rejected"),
      value: "3",
      icon: XCircle,
      description: t("requiresAttention"),
      color: "text-red-600",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
