import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navContainer">
			<div className="listContainer"></div>
			<ul className="navList">
				<li className="listItem" href="#">
					<a>Portfolio</a>
				</li>
				<li className="listItem" href="#">
					<a>Blog</a>
				</li>
				<li className="listItem" href="#">
					<a>Projects</a>
				</li>
				<li className="listItem" href="#">
					<a>Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
