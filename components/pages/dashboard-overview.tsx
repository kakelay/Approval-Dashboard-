"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useLanguage } from "@/hooks/use-language"

const monthlyData = [
  { month: "Jan", approved: 45, rejected: 5, pending: 12 },
  { month: "Feb", approved: 52, rejected: 3, pending: 18 },
  { month: "Mar", approved: 48, rejected: 7, pending: 24 },
  { month: "Apr", approved: 61, rejected: 4, pending: 15 },
  { month: "May", approved: 55, rejected: 6, pending: 20 },
  { month: "Jun", approved: 67, rejected: 2, pending: 8 },
]

const statusData = [
  { name: "Approved", value: 328, color: "#22c55e" },
  { name: "Pending", value: 97, color: "#eab308" },
  { name: "Rejected", value: 27, color: "#ef4444" },
]

export function DashboardOverview() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{t("dashboard")}</h2>
        <p className="text-muted-foreground">{t("overviewPerformance")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("monthlyApprovalTrends")}</CardTitle>
            <CardDescription>{t("approvalActivity6Months")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="approved" fill="#22c55e" name={t("approved")} />
                <Bar dataKey="rejected" fill="#ef4444" name={t("rejected")} />
                <Bar dataKey="pending" fill="#eab308" name={t("pending")} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("statusDistribution")}</CardTitle>
            <CardDescription>{t("currentStatusBreakdown")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{t("recentActivity")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <div className="text-sm">
                  <p className="font-medium">{t("userRegistrationApproved")}</p>
                  <p className="text-muted-foreground">2 {t("minutesAgo")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <div className="text-sm">
                  <p className="font-medium">{t("budgetRequestPending")}</p>
                  <p className="text-muted-foreground">5 {t("minutesAgo")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <div className="text-sm">
                  <p className="font-medium">{t("contentPublicationRejected")}</p>
                  <p className="text-muted-foreground">10 {t("minutesAgo")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("topRequesters")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Alice Johnson</span>
                <span className="text-sm font-medium">12 {t("requests")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Bob Smith</span>
                <span className="text-sm font-medium">8 {t("requests")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Carol Davis</span>
                <span className="text-sm font-medium">6 {t("requests")}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("systemHealth")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">{t("responseTime")}</span>
                <span className="text-sm font-medium text-green-600">1.2s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">{t("uptime")}</span>
                <span className="text-sm font-medium text-green-600">99.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">{t("activeUsers")}</span>
                <span className="text-sm font-medium">247</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
