import React from "react";

import { useState, useEffect } from 'react'
import BlogList from "./BlogList";
const Home = () => {
const[blogs, setBlogs] = useState([
  {title: 'My new Website', body:'lorem ipsum...', author:'lavdim1',src:'/images/3408.jpeg', id:1},
  {title: 'Welcome party', body:'lorem ipsum...', author:'lavdim2',src:'/images/3408.jpeg', id:2},
  {title: 'Web dev top tips', body:'lorem ipsum...', author:'lavdim1',src:'/images/3408.jpeg',id:3}
]);

  const[name, setName] = useState('mario');

 const handleDelete = (id) => {
    const newBlogs=blogs.filter(blog => blog.id !==id);
    setBlogs(newBlogs);
 }

 useEffect(() => {
    console.log('Use effect ran');
    console.log(name);
 },[name]);
 

    return (
       <div className="home">
        <BlogList blogs={blogs} title='These are my blogs' handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter((blog) => blog.author ==='lavdim1')} title='Lavdim 1 blogs'/>
        <button onClick={() => setName('Luigi')}>Change Name</button>
        <p>{name}</p>
        </div>

      );
}
 
export default Home;
       
