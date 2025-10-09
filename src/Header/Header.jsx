import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './headerstyle.css'

function Header() {
    const navigate=useNavigate();
     const location = useLocation();
    const navItems=[
         {
            name: 'General',
            slug: "/general"
        },
        {
            name: 'Political',
            slug: "/category/political"
        },
        {
            name: 'World',
            slug: "/category/world"
        },
        {
            name: 'Business',
            slug: "/category/business"
        },
        {
            name: 'Technology',
            slug: "/category/technology"
        },
        {
            name: 'Entertainment',
            slug: "/category/entertainment"
        },
         {
            name: 'Sports',
            slug: "/category/sports"
        },
         {
            name: 'Health',
            slug: "/category/health"
        },
    ]
     const currentPath = location.pathname;
  return (
   <>
   
   <nav class="mainnav">
    <ul class="navlist">
        {navItems.map((item) => {
          const isActive = currentPath === item.slug;

          return (
            <li
              className={isActive ? 'navitem active' : 'navitem'}
              key={item.name}
            >
              <button
                className="navbutton"
                onClick={() => navigate(item.slug)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
    </ul>
   </nav>
   </>
  )
}

export default Header