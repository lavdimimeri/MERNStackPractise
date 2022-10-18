import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
         console.log(data);
        setBlogs(data);
      })
  }, [])
   /* useEffect(() => {
      fetchData();
      
      async function fetchData(){
         
         const response = await fetch('http://localhost:8000/blogs')
         try{
          const data = await response.json();
          console.log(data);
          setBlogs(data);
         }catch(error){
            console.log("Error " + error);
         }
      }
     
    },[])
*/
  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title={'All blogs'}/>}
    </div>
  );
}
 
export default Home;
