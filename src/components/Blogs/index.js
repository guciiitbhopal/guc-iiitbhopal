import React from 'react';
import BlogCard from './BlogCard';
import b1 from '../../assests/b1.png'
import b2 from '../../assests/b2.png'
import './style.css';
import Button from '@mui/material/Button';
import { blogsdata } from '../../data/blogs';

function Blog() {
  return (
   <>
    <div className='blog flex'>
        <div className='blogcont'>
        <h1>Thoughts & ideas around the thing that actually matters.</h1>
        <Button variant="contained">Read Blogs</Button>
        </div>
        <div className='blogimg '>
        <img src={b1}/>
        <img src={b2}/>
        </div>
    </div>
        <BlogCard blogsdata={blogsdata}/>
   </>
  )
}

export default Blog