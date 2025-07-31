"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { XCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import type { translations } from "@/utils/translations" // Assuming translations are imported from a utils file

const rejectedItems = [
  {
    id: "REQ-042",
    type: "Budget Request",
    requester: "Tom Anderson",
    email: "tom@example.com",
    rejectedAt: "2024-01-15 10:20 AM",
    rejectedBy: "Jane Smith",
    reason: "Insufficient documentation provided",
    priority: "High",
  },
  {
    id: "REQ-041",
    type: "Data Export",
    requester: "Emma Davis",
    email: "emma@example.com",
    rejectedAt: "2024-01-14 04:45 PM",
    rejectedBy: "John Doe",
    reason: "Security clearance required",
    priority: "Medium",
  },
]

export function RejectedItems() {
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
        <h2 className="text-2xl font-bold tracking-tight">{t("rejectedItems")}</h2>
        <p className="text-muted-foreground">{t("rejectedRequestsReasons")}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            {t("rejectedItems")}
          </CardTitle>
          <CardDescription>{t("allRejectedRequestsReasons")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("requestId")}</TableHead>
                <TableHead>{t("type")}</TableHead>
                <TableHead>{t("requester")}</TableHead>
                <TableHead>{t("priority")}</TableHead>
                <TableHead>{t("rejectedAt")}</TableHead>
                <TableHead>{t("rejectedBy")}</TableHead>
                <TableHead>{t("reason")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rejectedItems.map((item) => (
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
                  <TableCell className="text-sm text-muted-foreground">{item.rejectedAt}</TableCell>
                  <TableCell className="text-sm font-medium">{item.rejectedBy}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                    {item.reason === "Insufficient documentation provided"
                      ? t("insufficientDocumentation")
                      : item.reason === "Security clearance required"
                        ? t("securityClearanceRequired")
                        : item.reason}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
