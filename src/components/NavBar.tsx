  "use client"
import { Link, LogIn, LogOut, MoonStar, Settings, Sun, User} from 'lucide-react';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';
import { useTheme } from "next-themes";
import { SidebarTrigger } from './ui/sidebar';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
  





const navbar = () => {
    const { setTheme } = useTheme();
    // const {toggleSidebar} =useSidebar()
  return (
    <nav className='py-4 px-22 flex items-center justify-between w-full fixed top-0 mb-5 bg-background z-10 border-b border-border'>
        {/* left */}

        <SidebarTrigger/>

      {/* <Button variant='outline' onClick={toggleSidebar}>custom button</Button> */}

        {/* right */}

     <div className='flex items-center gap-4 '>
      <Link href='/'>Dashboardvvv</Link>
      
      {/* theme menu */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

      {/* <MoonIcon/> */}

    {/* User menu*/}  
<DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User  className='h-[1.2rem] w-[1.2rem] mr-2'/> profile</DropdownMenuItem>
    <DropdownMenuItem><Settings  className='h-[1.2rem] w-[1.2rem] mr-2'/> Settings</DropdownMenuItem>
    <DropdownMenuItem><LogIn  className='h-[1.2rem] w-[1.2rem] mr-2'/> login</DropdownMenuItem>
               <SignedOut>
               <SignInButton />
               <SignUpButton />
               </SignedOut>
               <SignedIn>
               <UserButton />
               </SignedIn>
    <DropdownMenuItem variant='destructive'><LogOut  className='h-[1.2rem] w-[1.2rem] mr-2'/> logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>



      </div>
    </nav>
  );
}

export default navbar;
