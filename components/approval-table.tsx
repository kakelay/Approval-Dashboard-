"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, XCircle, Eye, Search, Filter } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/hooks/use-language"
import type { translations } from "@/utils/translations" // Import translations

const pendingApprovals = [
  {
    id: "REQ-001",
    type: "User Registration",
    requester: "Alice Johnson",
    email: "alice@example.com",
    submittedAt: "2024-01-15 10:30 AM",
    priority: "High",
    description: "New user registration for premium account access",
    status: "pending",
  },
  {
    id: "REQ-002",
    type: "Content Publication",
    requester: "Bob Smith",
    email: "bob@example.com",
    submittedAt: "2024-01-15 09:15 AM",
    priority: "Medium",
    description: "Blog post about new product features",
    status: "pending",
  },
  {
    id: "REQ-003",
    type: "Budget Request",
    requester: "Carol Davis",
    email: "carol@example.com",
    submittedAt: "2024-01-15 08:45 AM",
    priority: "High",
    description: "Q1 marketing budget allocation request",
    status: "pending",
  },
  {
    id: "REQ-004",
    type: "Access Permission",
    requester: "David Wilson",
    email: "david@example.com",
    submittedAt: "2024-01-14 04:20 PM",
    priority: "Low",
    description: "Request for admin panel access",
    status: "pending",
  },
  {
    id: "REQ-005",
    type: "Data Export",
    requester: "Eva Brown",
    email: "eva@example.com",
    submittedAt: "2024-01-14 02:10 PM",
    priority: "Medium",
    description: "Customer data export for analysis",
    status: "pending",
  },
]

export function ApprovalTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [selectedRequest, setSelectedRequest] = useState<(typeof pendingApprovals)[0] | null>(null)
  const { t } = useLanguage()

  const filteredApprovals = pendingApprovals.filter((approval) => {
    const matchesSearch =
      approval.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || approval.type.toLowerCase().includes(filterType.toLowerCase())
    return matchesSearch && matchesFilter
  })

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

  const handleApprove = (id: string) => {
    console.log(`Approved request: ${id}`)
    // Here you would typically make an API call to approve the request
  }

  const handleReject = (id: string) => {
    console.log(`Rejected request: ${id}`)
    // Here you would typically make an API call to reject the request
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("pendingApprovals")}</CardTitle>
        <CardDescription>Review and approve pending requests from users</CardDescription>
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("searchRequests")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder={t("filterByType")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allTypes")}</SelectItem>
              <SelectItem value="user">{t("userRegistration")}</SelectItem>
              <SelectItem value="content">{t("contentPublication")}</SelectItem>
              <SelectItem value="budget">{t("budgetRequest")}</SelectItem>
              <SelectItem value="access">{t("accessPermission")}</SelectItem>
              <SelectItem value="data">{t("dataExport")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("requestId")}</TableHead>
              <TableHead>{t("type")}</TableHead>
              <TableHead>{t("requester")}</TableHead>
              <TableHead>{t("priority")}</TableHead>
              <TableHead>{t("submitted")}</TableHead>
              <TableHead>{t("actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApprovals.map((approval) => (
              <TableRow key={approval.id}>
                <TableCell className="font-medium">{approval.id}</TableCell>
                <TableCell>{approval.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`/placeholder.svg?height=32&width=32&text=${approval.requester
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}`}
                      />
                      <AvatarFallback>
                        {approval.requester
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{approval.requester}</div>
                      <div className="text-sm text-muted-foreground">{approval.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getPriorityColor(approval.priority)}>
                    {t(approval.priority.toLowerCase() as keyof typeof translations.en)}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{approval.submittedAt}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedRequest(approval)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {t("requestDetails")} - {approval.id}
                          </DialogTitle>
                          <DialogDescription>{t("reviewCompleteRequest")}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">{t("type")}:</label>
                            <p className="text-sm text-muted-foreground">{approval.type}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t("requester")}:</label>
                            <p className="text-sm text-muted-foreground">
                              {approval.requester} ({approval.email})
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t("description")}:</label>
                            <p className="text-sm text-muted-foreground">{approval.description}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t("priority")}:</label>
                            <Badge className={getPriorityColor(approval.priority)}>
                              {t(approval.priority.toLowerCase() as keyof typeof translations.en)}
                            </Badge>
                          </div>
                          <div>
                            <label className="text-sm font-medium">{t("submitted")}:</label>
                            <p className="text-sm text-muted-foreground">{approval.submittedAt}</p>
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button onClick={() => handleApprove(approval.id)} className="flex-1">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              {t("approve")}
                            </Button>
                            <Button variant="destructive" onClick={() => handleReject(approval.id)} className="flex-1">
                              <XCircle className="h-4 w-4 mr-2" />
                              {t("reject")}
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button size="sm" onClick={() => handleApprove(approval.id)}>
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleReject(approval.id)}>
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
