import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const abortCont=new AbortController();
        setTimeout(() => {
         fetch(url, {signal: abortCont.signal})
         .then(res => {
          if(!res.ok){
              throw Error('Could not fetch data');
          }
           return res.json();
         })
         .then(data => {
            console.log(data);
           setData(data);
           setIsPending(false);
           setError(null);
         })
         .catch(err => {
            if(err.name === 'AbortError'){
                 console.log('FETCH ABORTED')
            }else{
                setError(err.message);
                setIsPending(false);
            }
         
         })
        },1000)
        //return () => console.log('Cleanup')
        return () => abortCont.abort();
       }, [url])
   
       return {data, isPending, error}

}

export default useFetch;