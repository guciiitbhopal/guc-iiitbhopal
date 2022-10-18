import React from "react";

const Blogs = () => {
	return (
		<div>
			<p>Thoughts & ideas around the thing that actually matters.</p>
			<a href="#blogs-section">
				<button>Read Blogs</button>
			</a>

			<div className="blogs-section">
				<div className="blog">
					<h2>Blog 1</h2>
				</div>
				<div className="blog">
					<h2>Blog 2</h2>
				</div>
				<div className="blog">
					<h2>Blog 3</h2>
				</div>
				<div className="blog">
					<h2>Blog 4</h2>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
