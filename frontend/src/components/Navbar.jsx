import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			
				<ul className="header">
					<div className="logo ">
						<li className="upperHalf logo-gradient">
							<Link to="/">GNU/Linux Users Club</Link>
						</li>
						<li className="lowerHalf logo-gradient">
							<Link to="/">IIIT Bhopal</Link>
						</li>
					</div>
					<div className="menu">
						<li>
							<Link to="/" className="menu-item">Home</Link>
						</li>
						<li>
							<Link to="/about" className="menu-item">About</Link>
						</li>
						<li>
							<Link to="/team" className="menu-item">Team</Link>
						</li>
						<li>
							<Link to="/blogs" className="menu-item">Blogs</Link>
						</li>
						<li>
							<Link to="/contact" className="menu-item">Contact</Link>
						</li>
					</div>
				</ul>
			
		</nav>
	);
};

export default Navbar;
