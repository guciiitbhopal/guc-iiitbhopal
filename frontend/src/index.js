import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import "./common/variables.css";
import "./common/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home/>} exact />
					<Route path="/about" element={<About/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="/team" element={<Team/>} />
					<Route path="/blogs" element={<Blogs/>} />
				</Routes>
				<Footer />
			</Router>
		</div>
	</div>
);
