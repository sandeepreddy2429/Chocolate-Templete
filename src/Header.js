import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
 

export default function Header(){
  let navigate = useNavigate();
  const logout =()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  {
    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token == undefined || token == ""){
      navigate("/login")
      }
    },[])
  }
  
    return(
        <>
         
        <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              ChocoLux
            </a>
 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item " >
                  <a className="nav-link" href="about"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="chocolate">Chocolates</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="login">Log In</a>
                </li>
                <li className="nav-item " >
                  <a className="nav-link" href="client"> Client</a>
                  </li>
                  <li className="nav-item " >
                  <a className="nav-link" href="useeffect">Useeffect</a>
                  </li>
              </ul>
              <div className="quote_btn-container">
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </div>

            </div>
          </nav>
        </div>
      </header>
      <div onClick={()=>logout()}><span>Logout</span>

     </div>

        </>
    )
}