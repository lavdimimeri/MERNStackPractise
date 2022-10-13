import React from "react";

import { useState } from 'react'
import BlogList from "./BlogList";
const Home = () => {
const[blogs, setBlogs] = useState([
  {title: 'My new Website', body:'lorem ipsum...', author:'lavdim1',src:'/images/3408.jpeg', id:1},
  {title: 'Welcome party', body:'lorem ipsum...', author:'lavdim2',src:'/images/3408.jpeg', id:2},
  {title: 'Web dev top tips', body:'lorem ipsum...', author:'lavdim3',src:'/images/3408.jpeg',id:3}
]);

    return (
       <div className="home">
        <BlogList blogs={blogs} title='These are my blogs'/>
        </div>

      );
}
 
export default Home;
       
