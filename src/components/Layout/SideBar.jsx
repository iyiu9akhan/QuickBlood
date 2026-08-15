import React from 'react'
import Container from './Container'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

function SideBar() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader />
            <SidebarContent>
              <SidebarGroup />
              <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
        </SidebarProvider>
      </Container>
    </>
  )
}

export default SideBar