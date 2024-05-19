"use client"
import Link from "next/link"
import Image from 'next/image'
import { useState } from "react"

export default function Navbar() {

	const [ burgerMenu, setBurgerMenu ] = useState(false)

	const navbarLinks = [
		{name:"Nosotros", href:"/", id:"Nosotros"},
		{name:"Novedades", href:"/", id:"Novedades"},
		{name:"Inversores", href:"/", id:"Inversores"},
		{name:"Sumate al equipo", href:"/", id:"Sumate al equipo"},
		{name:"Productos y Servicios", href:"/", id:"Productos y Servicios"},
		{name:"Proveedores", href:"/", id:"Proveedores"},
		{name:"*", href:"/", id:"*", clase:"nav-link"},
		{name:"ES", href:"/", id:"ES", clase:"nav-link-sec"},	
		{name:"Sitios", href:"/", id:"Sitios", clase:"nav-link"}
	]
  	
  	return (
  		<nav className="flex items-center justify-between bg-white z-50 h-16 fixed pl-5 w-full top-0 mb-16 border-b border-light-gray min-[1280px]:px-0 xl:flex xl:justify-around xl:items-center min-[1400px]:px-24 xl:relative xl:mb-0 xl:h-20 xl:leading-[5rem] 2xl:justify-between">
	  		<Link href="/">
				<div>
				  	<Image src="logo.svg" alt="AeroNex Logo" width={135} height={36} className="md:w-44" />
				</div>
	  		</Link>
  			<div onClick={() => setBurgerMenu(!burgerMenu)} className="xl:hidden px-4 py-4 cursor-pointer border-l">
  				<Image src="burger-icon.svg" alt="Burger Menu Icon" width={24} height={24} />
  			</div>
	  		<ul className={`xl:block ${burgerMenu ? 'block' : 'hidden'} fixed top-16 left-0 w-full h-full pt-4 px-1.5 pb-16 overflow-scroll z-9 bg-white xl:relative xl:w-auto xl:pb-0 xl:h-20 xl:overflow-hidden xl:top-0 xl:pt-0 xl:px-0`}>
	  			{navbarLinks.map((link) => (
	  				<li key={link.id} onClick={() => setBurgerMenu(!burgerMenu)} className={`cursor-pointer border-b border-light-gray py-1.5 px-4 leading-[3.75rem] xl:active:border-b-2 xl:active:text-primary-blue xl:active:cursor-pointer xl:active:border-primary-blue xl:hover:border-b-2 xl:hover:text-primary-blue xl:hover:cursor-pointer xl:hover:border-b-primary-blue xl:leading-[5rem] xl:inline-block xl:border-0 xl:h-20 xl:py-0 xl:px-3 ${link.clase === "nav-link" ? 'xl:border-x xl:border-light-gray' : ''}`}>
	  					<Link href={link.href} className="inline-block text-lg tracking-wider after:absolute after:text-medium-gray-300 after:right-7 after:content-[url('../public/icon-chevron-right.svg')] md:text-base md:px-0 md:active:text-primary-blue xl:after:content-none">
                            {link.name === "*" ? 
                                <Image src="icon.svg" alt="Asterisco" width={14} height={14} className={`inline ${link.clase === "nav-link" ? 'xl:mx-2.5' : ''}`} /> :
                                <span className={`${link.clase === "nav-link" ? 'xl:mx-2.5' : ''} ${link.clase === "nav-link-sec" ? 'xl:mx-3' : ''}`}>{link.name}</span>
                            }
                        </Link>
	  				</li>
	  			))}
	  		</ul>
  		</nav>
	)
}