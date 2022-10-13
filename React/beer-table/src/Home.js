import React from "react";

import { useState } from 'react'
const Home = () => {
const[blogs, setBlogs] = useState([
  {title: 'My new Website', body:'lorem ipsum...', author:'lavdim1',src:'/images/3408.jpeg', id:1},
  {title: 'Welcome party', body:'lorem ipsum...', author:'lavdim2',src:'/images/3408.jpeg', id:2},
  {title: 'Web dev top tips', body:'lorem ipsum...', author:'lavdim3',src:'/images/3408.jpeg',id:3}
]);

    return (
       <div className="home">
         {blogs.map((blog) =>(
           <div className="blog-preview" key={blog.id}>
            <h2> {blog.title} </h2>
            <p> Written by {blog.author}</p>
            <img src ={blog.src}/>
           </div>
         ))}
        
       </div>

      );
}
 
export default Home;
       
