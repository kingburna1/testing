import React from 'react';
import {Home, Inbox, Calendar, Settings, Search, User2, ChevronUp, Plus, Projector, PlusIcon, ChevronDownCircleIcon, PlusCircle  } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from './ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';





const items= [
  
    {
        title: "Home",
        url: "/",
        icon: Home,
        },
       
    {
        title: "Inbox",
        url: "/",
        icon: Inbox,
        },
        {
            title: "Calendar",
            url: "/",
            icon: Calendar,
            },
           
            {
                title: "Search",
                url: "/",
                icon: Search,
                },
                  
            {
                title: "Search",
                url: "/",
                icon: Settings,
                },

]
const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='py-4'>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/">
                        <Image src="/vercel.svg" alt="Logo" width={20} height={20} /> 
                        <span>burna nation</span>   
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
       
       <SidebarSeparator/>

      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item=>(
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <Link href={item.url}>
                            <item.icon/>
                            <span className='ml-2'>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                        {item.title==="Inbox"  && (
                            <SidebarMenuBadge>50</SidebarMenuBadge>
                        )}
                    </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        {/* <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item=>(
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <Link href={item.url}>
                            <item.icon/>
                            <span className='ml-2'>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup> */}

        <SidebarGroup>
            <SidebarGroupLabel className="cursor-pointer"> course </SidebarGroupLabel>
           <SidebarGroupAction>
               <Plus/>     <span className='sr-only'>All courses</span>
           </SidebarGroupAction>
           <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild >
                          <Link href="/#">
                          <Projector/>see all courses 
                          </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton  asChild>
                          <Link href="/#">
                          <PlusIcon/>Add more course
                          </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

            </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>

        {/* other side bar groups */}
        {/* collapsible */}

          <Collapsible  defaultOpen className='group/collapsible'>
        <SidebarGroup>
            <SidebarGroupLabel className="cursor-pointer" asChild>
                <CollapsibleTrigger>
                 collapsible group
               <ChevronDownCircleIcon className='ml-auto transition-transform group-data-[state-open]/collapsible:rate-100'/>
                </CollapsibleTrigger>
            </SidebarGroupLabel>
           {/* <SidebarGroupAction>
               <Plus/>     <span className='sr-only'>All courses</span>
           </SidebarGroupAction> */}
           <CollapsibleContent>

           <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                          <Link href="/#">
                          <Projector/>see all courses 
                          </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                {/* <SidebarMenuItem>
                    <SidebarMenuButton >
                          <Link href="/#">
                          <PlusIcon/>Add more course
                          </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem> */}

            </SidebarMenu>
           </SidebarGroupContent>
           </CollapsibleContent>
        </SidebarGroup>
         </Collapsible>

         {/* NESTED GROUP  */}

         <SidebarGroup>
            <SidebarGroupLabel className="cursor-pointer"> New courses </SidebarGroupLabel>
          
           <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild >
                          <Link href="/#">
                          <Projector/>see all new courses 
                          </Link>
                    </SidebarMenuButton>
                     
                     <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton >
                                 <Link href="/#"></Link>
                                 <PlusCircle/> 
                                 Add course
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>

                        {/* item two */}
                        {/* <SidebarMenuSubItem>
                            <SidebarMenuSubButton >
                                 <Link href="/#"></Link>
                                 <PlusCircle/> 
                                 Basic course
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem> */}

                        {/* item three */}

                        {/* <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                 <Link href="/#"></Link>
                                 <PlusCircle/> 
                                 intermidiery course
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem> */}

                        {/* fourth item */}

                        {/* {/* <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                 <Link href="/#"></Link>
                                 <PlusCircle/> 
                                 master course
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem> */}
                     </SidebarMenuSub> 

                </SidebarMenuItem>

                {/* <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                          <Link href="/#">
                          <PlusIcon/>Add more course
                          </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem> */}

            </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>


      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
               <DropdownMenu>
                <DropdownMenuTrigger >
                    <SidebarMenuButton >
                        <User2/> big zag nen <ChevronUp className='ml-auto'/>
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                    <DropdownMenuItem>Help</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  );
}

export default AppSidebar;
