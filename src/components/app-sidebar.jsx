"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"

// // This is sample data.
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "QuickBlood",
//       logo: (
//         <GalleryVerticalEndIcon />
//       ),
//       plan: "share hope & save life",
//     },
//     {
//       name: "Acme Corp.",
//       logo: (
//         <AudioLinesIcon />
//       ),
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: (
//         <TerminalIcon />
//       ),
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Home",
//       url: "#",
//       icon: (
//         <TerminalSquareIcon />
//       ),
//     },
//     {
//       title: "Donate",
//       url: "#",
//       icon: (
//         <BotIcon />
//       ),
//       isActive: true,
//       items: [
//         {
//           title: "Schedule appointment",
//           url: "#",
//         },
//         {
//           title: "View eligibility",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: (
//         <BookOpenIcon />
//       ),
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: (
//         <Settings2Icon />
//       ),
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: (
//         <FrameIcon />
//       ),
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: (
//         <PieChartIcon />
//       ),
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: (
//         <MapIcon />
//       ),
//     },
//   ],
// }
import {
  GalleryVerticalEndIcon,
  TerminalSquareIcon,
  Droplet,
  AlertCircle,
  Bell,
  Mail,
  User,
  Settings2Icon,
  HelpCircle
} from "lucide-react"

// QuickBlood sidebar data
const data = {
  user: {
    name: "lorem",
    email: "lorem@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "QuickBlood",
      logo: (
        <Droplet />
      ),
      plan: "share hope & save life",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon:
        <TerminalSquareIcon />,
      // items: []
    },
    {
      title: "Donate",
      url: "#",
      icon: (
        <Droplet />
      ),
      isActive: true,
      items: [
        {
          title: "Schedule appointment",
          url: "/donate/schedule",
        },
        {
          title: "View eligibility",
          url: "/donate/eligibility",
        },
        {
          title: "Donation history",
          url: "/donate/history",
        },
      ],
    },
    {
      title: "Blood Requests",
      url: "#",
      icon: (
        <AlertCircle />
      ),
      items: [
        {
          title: "Active requests",
          url: "/requests/active",
        },
        {
          title: "Urgent needs",
          url: "/requests/urgent",
        },
        {
          title: "Search by type",
          url: "/requests/search",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon />
      ),
      items: [
        {
          title: "Account",
          url: "/settings/account",
        },
        {
          title: "Privacy",
          url: "/settings/privacy",
        },
        {
          title: "Preferences",
          url: "/settings/preferences",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Notifications",
      url: "/notifications",
      icon: (
        <Bell />
      ),
    },
    {
      title: "Messages",
      url: "/messages",
      icon: (
        <Mail />
      ),
    },
    {
      title: "Profile",
      url: "/profile",
      icon: (
        <User />
      ),
    },
    {
      title: "Help",
      url: "/help",
      icon: (
        <HelpCircle />
      ),
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
