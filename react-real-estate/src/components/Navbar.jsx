import React , {useState} from 'react'
import styled from 'styled-components'

const Navbar = () => {

const [nav, setNav]= useState(false)

function fixNav() {
	if (window.scrollY >= 80) {
		setNav(true)
	} else {
		setNav(false)
	}
}
window.addEventListener('scroll',fixNav)



    return (
        // <nav className="nav">
            <nav className={nav?'nav active': 'nav'}>
			<div className="container">
				<h1 className="logo"><a href="/index.html">My Website</a></h1>
				<ul>
					<li><a href="#" className="current">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
		</nav>
    )
}

export default Navbar
