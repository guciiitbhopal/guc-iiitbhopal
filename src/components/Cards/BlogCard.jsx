import React from "react";

const BlogCard = (props) => {
  return (
    <div className="bg-gray-700 w-72 2xl:mx-10 xl:mx-5 lg:mx-10 md:mx-2 md:w-64 lg:w-72 sm:mx-28 mx-5 my-8 rounded-bl-2xl rounded-tr-2xl shadow-md shadow-slate-500">
      <div className="p-3">
        <img className="rounded-lg" src={props.img} alt="blog-img" />
      </div>
      <div className="bg-slate-300 rounded-md mx-8 relative bottom-7 py-2 px-4 text-neutral-900 shadow-lg  hover:bg-sky-100">
        <h1 className="font-semibold text-lg font-IBM text-center mt-2">
          {props.title}
        </h1>
        <p className="text-sm font-Sora mx-1 my-3 text-neutral-700">
          {props.intro}......{" "}
          <span className="font-Montserrat font-semibold hover:text-blue-800"> read more </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
