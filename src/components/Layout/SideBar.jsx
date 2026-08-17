import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function SideBar({ children }) {
  return (
    <SidebarProvider>
      {/* <div className="mx-auto flex w-full max-w-330 relative border-x min-h-screen"> */}
        <AppSidebar  />
        <main >
          <SidebarTrigger />
          {children}
        </main>
      {/* </div> */}
    </SidebarProvider>
  )
}

export default SideBar