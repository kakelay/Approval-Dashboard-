"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Download, Calendar, TrendingUp } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const performanceData = [
  { month: "Jan", approved: 45, rejected: 5, pending: 12, avgTime: 2.3 },
  { month: "Feb", approved: 52, rejected: 3, pending: 18, avgTime: 1.8 },
  { month: "Mar", approved: 48, rejected: 7, pending: 24, avgTime: 2.1 },
  { month: "Apr", approved: 61, rejected: 4, pending: 15, avgTime: 1.9 },
  { month: "May", approved: 55, rejected: 6, pending: 20, avgTime: 2.0 },
  { month: "Jun", approved: 67, rejected: 2, pending: 8, avgTime: 1.7 },
]

export function Reports() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t("reports")}</h2>
          <p className="text-muted-foreground">{t("analyticsPerformanceReports")}</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="last6months">
            <SelectTrigger className="w-[180px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last30days">{t("last30Days")}</SelectItem>
              <SelectItem value="last6months">{t("last6Months")}</SelectItem>
              <SelectItem value="lastyear">{t("lastYear")}</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            {t("exportReport")}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("totalProcessed")}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">328</div>
            <p className="text-xs text-muted-foreground">+12% {t("fromLastMonth")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("approvalRate")}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% {t("fromLastMonth")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("avgResponseTime")}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.9h</div>
            <p className="text-xs text-muted-foreground">-0.3h {t("fromLastMonth")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("activeUsers")}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+18 {t("fromLastMonth")}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("approvalTrends")}</CardTitle>
            <CardDescription>{t("monthlyApprovalStatistics")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="approved" fill="#22c55e" name={t("approved")} />
                <Bar dataKey="rejected" fill="#ef4444" name={t("rejected")} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("responseTimeTrend")}</CardTitle>
            <CardDescription>{t("averageResponseTimeHours")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="avgTime" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("detailedPerformanceMetrics")}</CardTitle>
          <CardDescription>{t("comprehensiveBreakdown")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">{t("requestTypes")}</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>{t("userRegistration")}</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contentPublication")}</span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("budgetRequests")}</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("accessPermissions")}</span>
                  <span className="font-medium">12%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">{t("peakHours")}</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>
                    9:00 {t("am")} - 11:00 {t("am")}
                  </span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    2:00 {t("pm")} - 4:00 {t("pm")}
                  </span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    11:00 {t("am")} - 1:00 {t("pm")}
                  </span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("otherHours")}</span>
                  <span className="font-medium">15%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">{t("approvalEfficiency")}</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>{t("sameDay")}</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("nextDay")}</span>
                  <span className="font-medium">24%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("days23")}</span>
                  <span className="font-medium">6%</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("moreThan3Days")}</span>
                  <span className="font-medium">2%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
