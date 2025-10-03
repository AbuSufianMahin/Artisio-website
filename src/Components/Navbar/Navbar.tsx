import React from 'react'
import ResponsiveWidthContainer from '../Shared/ResponsiveWidthContainer/ResponsiveWidthContainer'

import Link from 'next/link'
import { ArtisioLogo } from '../Shared/ArtisioLogo/ArtisioLogo'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import { UserRound } from 'lucide-react'


export default function Navbar() {
  const navItems = [
    {
      navName: "Home",
      link: "/home",
    },
    {
      navName: "Products",
      link: "/products",
    },
    {
      navName: "Gallery",
      link: "/gallery",
    },
  ]

  return (
    <ResponsiveWidthContainer>
      <nav className='flex justify-between items-center py-5'>
        <ArtisioLogo />

        <NavigationMenu viewport={false}>
          <NavigationMenuList className='flex gap-4'>
            {
              navItems.map((item, index) =>
                <NavigationMenuItem key={index} className='py-2 px-4 rounded-xl border hover:bg-accent font-semibold'>
                  <Link href={item.link}>{item.navName}</Link>
                </NavigationMenuItem>
              )
            }

          </NavigationMenuList>
        </NavigationMenu>


        <div className='flex items-center gap-2 font-semibold'>
          <div>
            <UserRound />
          </div>
          <div className='text-xs'>
            <p>Account</p>
            <Link href={"/login"} className='hover:text-blue-500'>Login</Link> or <Link href={"/register"} className='hover:text-blue-500'>Register</Link>
          </div>
        </div>

      </nav>
    </ResponsiveWidthContainer>
  )
}