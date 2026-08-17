import React from 'react'
import { SidebarProvider, SidebarTrigger  } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function SideBar({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main >
      <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default SideBar