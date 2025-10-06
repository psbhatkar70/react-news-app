import React from 'react'
import { Link} from 'react-router-dom'
import News from './News'
import './intro.css'
export default function Intro() {

   
  return (
    <>
    <div
    class=" main"
   
    >
            <div class= "top">
              <h1 className='mainname'>ReactPress</h1>
              <h1 
            >A complete, single-page news aggregator application built from the ground up using React and modern front-end development practices. This project demonstrates a strong understanding of component-based architecture, client-side routing, and asynchronous data handling.
</h1>
            </div>
            <div class="top2"><h2>Technical Achievements</h2></div>
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="content-box">
                <h3 class="head">
                Developed with React:
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
                Built a scalable, component-based application with clean and modular architecture.
                </p>
              </div>
               <div className="content-box">
                <h3 class="head">
                Routing
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
                Designed an advanced routing system using React Router v6 with layout routes and &lt;Outlet /&gt; for a consistent UI
                </p>
              </div>
               <div className="content-box">
                <h3 class="head">
                Active Navigation State:
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
               Created a custom solution to highlight active links based on the current URL for better user feedback.
                </p>
              </div>
               <div className="content-box">
                <h3 class="head">
                Reusable Components:
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
                Followed the DRY principle by building a single dynamic component to render all news categories.
                </p>
              </div>
               <div className="content-box">
                <h3 class="head">
                Custom Hooks:
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
                Wrote reusable hooks for API fetching, loading, and error handling.
                </p>
              </div>
             
               
              </div>
               <div className="carousel-container2">
              <div className="content-box">
                <h3 class="head">
                API Integration:
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
                Integrated a third-party News API to handle asynchronous requests and display real-time content.
                </p>
              </div>
               <div className="content-box">
                <h3 class="head">
                Responsive Design:
                </h3>
                <div class="divider"></div>
                <p class="headdetail">
                Built the entire application using a modular, component-based architecture for a scalable and maintainable codebase.
                </p>
              </div>
              
             
               
              </div>
            </div>

       <div
       >
        
        <Link to="/general"
        class="butn"
        >{"Read News \u2B95"}</Link>
    </div>
    </div>
    </>
  )
}
