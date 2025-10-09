import { useEffect, useState } from "react";

export const useFetchnews=(category)=>{
    const apikey=import.meta.env.VITE_GNEWS_API_KEY;
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true);
     async function apicall() {
        setLoading(true);
        try{
           const response=await fetch(`/api/v4/top-headlines?category=${category}&lang=en&country=in&max=50&apikey=${apikey}`);
           const datanews=await response.json();
       
           
            setArticles(datanews.articles);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
        
    }
    
    
    
    useEffect(() => {
       apicall();
      
       }, [category]);
       return {articles,loading};
}