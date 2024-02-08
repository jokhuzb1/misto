import React from 'react'
import { NavLink } from 'react-router-dom';
export default function NavItem({name, to}) {
  return (
    <NavLink
  to={to}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  {name}
</NavLink>
  )
}
