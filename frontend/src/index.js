import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

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
				</Routes>
			</Router>
		</div>
	</div>
);
