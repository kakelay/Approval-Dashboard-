"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import type { translations } from "@/utils/translations" // Assuming translations are imported from a utils file

const approvedItems = [
  {
    id: "REQ-045",
    type: "User Registration",
    requester: "Sarah Wilson",
    email: "sarah@example.com",
    approvedAt: "2024-01-15 02:30 PM",
    approvedBy: "John Doe",
    priority: "Medium",
  },
  {
    id: "REQ-044",
    type: "Content Publication",
    requester: "Mike Johnson",
    email: "mike@example.com",
    approvedAt: "2024-01-15 01:15 PM",
    approvedBy: "Jane Smith",
    priority: "High",
  },
  {
    id: "REQ-043",
    type: "Access Permission",
    requester: "Lisa Brown",
    email: "lisa@example.com",
    approvedAt: "2024-01-15 11:45 AM",
    approvedBy: "John Doe",
    priority: "Low",
  },
]

export function ApprovedItems() {
  const { t } = useLanguage()

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{t("approvedItems")}</h2>
        <p className="text-muted-foreground">{t("recentlyApprovedRequests")}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            {t("approvedItems")}
          </CardTitle>
          <CardDescription>{t("allSuccessfullyApproved")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("requestId")}</TableHead>
                <TableHead>{t("type")}</TableHead>
                <TableHead>{t("requester")}</TableHead>
                <TableHead>{t("priority")}</TableHead>
                <TableHead>{t("approvedAt")}</TableHead>
                <TableHead>{t("approvedBy")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvedItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`/placeholder.svg?height=32&width=32&text=${item.requester
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}`}
                        />
                        <AvatarFallback>
                          {item.requester
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{item.requester}</div>
                        <div className="text-sm text-muted-foreground">{item.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(item.priority)}>
                      {t(item.priority.toLowerCase() as keyof typeof translations.en)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{item.approvedAt}</TableCell>
                  <TableCell className="text-sm font-medium">{item.approvedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
