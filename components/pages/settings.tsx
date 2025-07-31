"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SettingsIcon, Save, Bell, Shield, Mail, Palette } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageAwareText } from "@/components/language-aware-text"

export function Settings() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{t("settings")}</h2>
        <p className="text-muted-foreground">{t("configureSystemSettings")}</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              <LanguageAwareText>{t("generalSettings")}</LanguageAwareText>
            </CardTitle>
            <CardDescription>
              <LanguageAwareText>{t("basicSystemConfiguration")}</LanguageAwareText>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="system-name">
                <LanguageAwareText>{t("systemName")}</LanguageAwareText>
              </Label>
              <Input id="system-name" defaultValue={t("adminPortal")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="system-description">
                <LanguageAwareText>{t("description")}</LanguageAwareText>
              </Label>
              <Textarea id="system-description" defaultValue={t("approvalSystemDescription")} rows={3} />
            </div>
            <div className="grid gap-2">
              <Label>
                <LanguageAwareText>{t("language")}</LanguageAwareText>
              </Label>
              <p className="text-sm text-muted-foreground">
                <LanguageAwareText>{t("languageCanBeChanged")}</LanguageAwareText>
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone">
                <LanguageAwareText>{t("timezone")}</LanguageAwareText>
              </Label>
              <Select defaultValue="utc">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">
                    <LanguageAwareText>{t("easternTime")}</LanguageAwareText>
                  </SelectItem>
                  <SelectItem value="pst">
                    <LanguageAwareText>{t("pacificTime")}</LanguageAwareText>
                  </SelectItem>
                  <SelectItem value="cet">
                    <LanguageAwareText>{t("centralEuropeanTime")}</LanguageAwareText>
                  </SelectItem>
                  <SelectItem value="ict">
                    <LanguageAwareText>{t("indochinaTime")}</LanguageAwareText>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              <LanguageAwareText>{t("appearance")}</LanguageAwareText>
            </CardTitle>
            <CardDescription>
              <LanguageAwareText>{t("themeDescription")}</LanguageAwareText>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("theme")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("themeDescription")}</LanguageAwareText>
                </p>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <LanguageAwareText>{t("notificationSettings")}</LanguageAwareText>
            </CardTitle>
            <CardDescription>
              <LanguageAwareText>{t("configureNotificationPreferences")}</LanguageAwareText>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("emailNotifications")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("receiveEmailAlerts")}</LanguageAwareText>
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("pushNotifications")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("browserPushNotifications")}</LanguageAwareText>
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("dailySummary")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("dailyEmailSummary")}</LanguageAwareText>
                </p>
              </div>
              <Switch />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notification-email">
                <LanguageAwareText>{t("notificationEmail")}</LanguageAwareText>
              </Label>
              <Input id="notification-email" type="email" defaultValue="admin@example.com" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <LanguageAwareText>{t("securitySettings")}</LanguageAwareText>
            </CardTitle>
            <CardDescription>
              <LanguageAwareText>{t("securityAccessControl")}</LanguageAwareText>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("twoFactorAuthentication")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("require2FA")}</LanguageAwareText>
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("sessionTimeout")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("autoLogoutInactivity")}</LanguageAwareText>
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="session-duration">
                <LanguageAwareText>{t("sessionDurationMinutes")}</LanguageAwareText>
              </Label>
              <Input id="session-duration" type="number" defaultValue="60" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="max-login-attempts">
                <LanguageAwareText>{t("maxLoginAttempts")}</LanguageAwareText>
              </Label>
              <Input id="max-login-attempts" type="number" defaultValue="5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <LanguageAwareText>{t("emailConfiguration")}</LanguageAwareText>
            </CardTitle>
            <CardDescription>
              <LanguageAwareText>{t("smtpSettings")}</LanguageAwareText>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="smtp-server">
                <LanguageAwareText>{t("smtpServer")}</LanguageAwareText>
              </Label>
              <Input id="smtp-server" defaultValue="smtp.example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-port">
                <LanguageAwareText>{t("smtpPort")}</LanguageAwareText>
              </Label>
              <Input id="smtp-port" type="number" defaultValue="587" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-username">
                <LanguageAwareText>{t("username")}</LanguageAwareText>
              </Label>
              <Input id="smtp-username" defaultValue="admin@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-password">
                <LanguageAwareText>{t("password")}</LanguageAwareText>
              </Label>
              <Input id="smtp-password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>
                  <LanguageAwareText>{t("useTLSSSL")}</LanguageAwareText>
                </Label>
                <p className="text-sm text-muted-foreground">
                  <LanguageAwareText>{t("enableSecureConnection")}</LanguageAwareText>
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            <LanguageAwareText>{t("saveSettings")}</LanguageAwareText>
          </Button>
        </div>
      </div>
    </div>
  )
}
