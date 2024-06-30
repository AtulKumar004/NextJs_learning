"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function NavLink({href , children}) {
    let path = usePathname();
  return (
    <Link href= {href} className= {path.startsWith(`${href}`) ? 'active' : undefined}>{children}</Link>
  )
}
