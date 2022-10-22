import React from "react";
import BlogCard from "../components/Cards/BlogCard";
import BlogData from "../data/blog-data";

const Blogs = () => {
  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>

      <div className="flex flex-wrap">
        {BlogData.map(blog => (
          <BlogCard
          img={blog.img}
          title={blog.title}
          intro={blog.intro}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
