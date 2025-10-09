import React, {  useState } from 'react'
import { useFetchnews } from '../hooks/useFetchnews'

import './news.css'
import { useParams } from 'react-router-dom';
export default function News() {
  const params = useParams();
  const category= params.categoryName || 'general'
  const [initial,setInitial]=useState(0);
  const {articles, loading}=useFetchnews(category);
   
  function handlenextclick(){
   setInitial(prevIndex => (prevIndex + 1) % articles.length);
  }
 
  
  function handleprevclick(){
   setInitial(prevIndex => (prevIndex - 1 + articles.length) % articles.length);
  }
 
 if(loading) {
   return (
     <>
     <div
     class='loading'
     >
      <h1>Data is Loading...</h1>
     </div>
     </>
   )
 }
  
   const currentArticle = articles[initial];
   return (
      <>
    <div
    class="main1"
    > 
      <div>
      <div 
      
        class="img"
       
        >
          <img 
          src={currentArticle.image} alt="image" />
           
      </div>
      </div>
      <div 
      class="main2"
      >
             <div
              >
                   <h2
                   class="h2"
                  >{currentArticle.title}</h2>
                   <p
                   class="desc"
                  >{currentArticle.description}</p>
                  <p class='author'>Published by: <span class="author" >{currentArticle.source.name}</span></p>
              </div>
               <div
               class="info"
               >
                  <div
                  class="infocol">
                  <button 
                   class="prev"
                   onClick={handleprevclick}
                  >{"\u2B95"}</button>
                  <button
                  class="next"
                  onClick={handlenextclick}
                  >{"\u2B95"}</button>         
                  </div>
              </div>
      </div>
     
    </div>
    </>
    )
}
