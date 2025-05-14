import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SchemaOrg } from "@/components/schema-org"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
