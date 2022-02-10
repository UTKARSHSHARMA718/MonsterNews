import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Navbar extends Component {
    render() {

      const myStyle={
        fontFamily:'Special Elite'
      }
        return (
            <nav className="navbar navbar-expand-lg navbar-light  sticky-top" style={{backgroundColor:"#e0d9ff"}}>
              {/* To add inline CSS in react class based components :- <h1 style={{color: "red"}}>Hello Style!</h1> */}
              {/* sticky-top is a bootstrap class that is used to stick the nav on top. */}
            <div className="container-fluid">
              <Link className="navbar-brand" to="/" style={myStyle} id='MonsterNewsLink'>MonsterNews</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    
                  </li>
                  <li className="nav-item">
               
                    <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                   
                  </li>
       
                  <li className="nav-item">
                   
                    <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                 
                  </li>
                  <li className="nav-item">
        
                    <Link className="nav-link active" aria-current="page" to="/">General</Link>
               
                  </li>
                  <li className="nav-item">
               
                   
                    <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
             
                  </li>
                  <li className="nav-item">
                
                    <Link className="nav-link active" aria-current="page" to="/Science">Science</Link>
                  
                  </li>
                  <li className="nav-item">
                  
                    <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                  
                  </li>
                  <li className="nav-item">
              
                    <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                  </li>
              
                </ul>
                
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar
