import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

 /* useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
         console.log(data);
        setBlogs(data);
        setIsPending(false);
      });
  }, [])
*/
    //------ SETING TIMOUT IN ORDER TO NOTICE THE LOADING DIV
  useEffect(() => {
    setTimeout(() => {
     fetch('http://localhost:8000/blogs')
     .then(res => {
      if(!res.ok){
          throw Error('Could not fetch data');
      }
       return res.json();
     })
     .then(data => {
        console.log(data);
       setBlogs(data);
       setIsPending(false);
       setError(null);
     })
     .catch(err => {
      setError(err.message);
      setIsPending(false);
     })
    },1000)
   }, [])
  
     // ----FETCHING DATA USING ASYNC/AWAIT (MODERN WAY OF ) 
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
      {error && <div>{ error }</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title={'All blogs'}/>}
    </div>
  );
}
 
export default Home;
