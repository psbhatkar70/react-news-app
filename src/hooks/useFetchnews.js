import { useEffect, useState } from "react";

export const useFetchnews=(category)=>{
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true);
     async function apicall() {
        setLoading(true);
        try{
           const response=await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=50&apikey=cd2c12dc2a355c77cdd998c8de57c2cc`);
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